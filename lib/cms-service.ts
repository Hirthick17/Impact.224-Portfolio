// CMS Service Layer - Handles all Supabase operations for CMS content
import { supabase } from './supabase';
import type { RealtimeChannel } from '@supabase/supabase-js';

// Cache for CMS content to reduce database calls
// Reduced cache duration to ensure changes are reflected faster
const contentCache = new Map<string, { data: any; timestamp: number; version: number }>();
const CACHE_DURATION = 5 * 1000; // 5 seconds (aggressive caching for real-time feel)
let globalCacheVersion = 0; // Global version to force cache invalidation

/**
 * Get CMS content for a specific page from Supabase
 * Uses caching to improve performance
 */
export async function getCMSContent<T>(pageId: string, forceRefresh: boolean = false): Promise<T | null> {
    try {
        // Check cache first (unless force refresh)
        if (!forceRefresh) {
            const cached = contentCache.get(pageId);
            if (cached && Date.now() - cached.timestamp < CACHE_DURATION && cached.version === globalCacheVersion) {
                console.log(`📦 [CACHE HIT] Using cached data for: ${pageId}`);
                return cached.data as T;
            }

            if (cached) {
                console.log(`🔄 [CACHE EXPIRED] Fetching fresh data for: ${pageId}`);
            }
        } else {
            console.log(`🔄 [FORCE REFRESH] Bypassing cache for: ${pageId}`);
        }

        // Fetch from Supabase
        console.log(`🌐 [FETCH] Requesting data from Supabase for: ${pageId}`);
        const { data, error } = await supabase
            .from('cms_content')
            .select('content')
            .eq('page_id', pageId)
            .single();

        if (error) {
            if (error.code === 'PGRST116') {
                // No data found - this is okay, will use default data
                console.log(`⚠️ [NO DATA] No CMS content found for: ${pageId}`);
                return null;
            }
            console.error(`❌ [ERROR] Error fetching CMS content for ${pageId}:`, error);
            return null;
        }

        // Update cache with version
        if (data) {
            contentCache.set(pageId, {
                data: data.content,
                timestamp: Date.now(),
                version: globalCacheVersion
            });
            console.log(`💾 [CACHE SET] Cached data for: ${pageId}`);
            return data.content as T;
        }

        return null;
    } catch (error) {
        console.error(`❌ [EXCEPTION] Exception fetching CMS content for ${pageId}:`, error);
        return null;
    }
}

/**
 * Save or update CMS content for a specific page
 */
export async function saveCMSContent<T>(pageId: string, content: T): Promise<boolean> {
    try {
        console.log('🗄️ [DATABASE] Starting upsert operation...', {
            pageId,
            contentKeys: Object.keys(content as any),
            timestamp: new Date().toISOString(),
        });

        // Use upsert to insert or update
        const { error } = await supabase
            .from('cms_content')
            .upsert(
                {
                    page_id: pageId,
                    content: content as any,
                },
                {
                    onConflict: 'page_id',
                }
            );

        if (error) {
            console.error(`❌ [DATABASE] Error saving CMS content for ${pageId}:`, error);
            return false;
        }

        // Invalidate cache - both delete specific and bump global version
        contentCache.delete(pageId);
        globalCacheVersion++; // Bump global version to invalidate all caches
        console.log('🔄 [DATABASE] Cache invalidated for', pageId, '(global version:', globalCacheVersion, ')');

        console.log('✅ [DATABASE] Update complete!', {
            pageId,
            timestamp: new Date().toISOString(),
            status: 'success',
        });

        return true;
    } catch (error) {
        console.error(`❌ [DATABASE] Exception saving CMS content for ${pageId}:`, error);
        return false;
    }
}

/**
 * Subscribe to real-time updates for a specific page
 * Returns a cleanup function to unsubscribe
 */
export function subscribeToCMSUpdates(
    pageId: string,
    callback: (content: any) => void
): () => void {
    let channel: RealtimeChannel | null = null;

    try {
        channel = supabase
            .channel(`cms_content:${pageId}`)
            .on(
                'postgres_changes',
                {
                    event: '*',
                    schema: 'public',
                    table: 'cms_content',
                    filter: `page_id=eq.${pageId}`,
                },
                (payload) => {
                    console.log(`🔔 [REALTIME] Received update for: ${pageId}`);

                    // Invalidate cache
                    contentCache.delete(pageId);
                    globalCacheVersion++; // Bump version

                    console.log(`🗑️ [REALTIME] Cache cleared for: ${pageId}`);

                    // Call callback with new content
                    if (payload.new && 'content' in payload.new) {
                        console.log(`✨ [REALTIME] Applying new content for: ${pageId}`);
                        callback((payload.new as any).content);
                    }
                }
            )
            .subscribe();
    } catch (error) {
        console.error(`Error subscribing to CMS updates for ${pageId}:`, error);
    }

    // Return cleanup function
    return () => {
        if (channel) {
            supabase.removeChannel(channel);
        }
    };
}

/**
 * Get all CMS page IDs from the database
 */
export async function getAllCMSPageIds(): Promise<string[]> {
    try {
        const { data, error } = await supabase
            .from('cms_content')
            .select('page_id');

        if (error) {
            console.error('Error fetching all CMS page IDs:', error);
            return [];
        }

        return data?.map((row) => row.page_id) || [];
    } catch (error) {
        console.error('Exception fetching all CMS page IDs:', error);
        return [];
    }
}

/**
 * Clear cache for a specific page or all pages
 */
export function clearCache(pageId?: string): void {
    if (pageId) {
        contentCache.delete(pageId);
        console.log(`🗑️ [MANUAL] Cache cleared for: ${pageId}`);
    } else {
        contentCache.clear();
        globalCacheVersion++; // Bump version when clearing all
        console.log(`🗑️ [MANUAL] All cache cleared (version: ${globalCacheVersion})`);
    }
}

/**
 * Migrate data from localStorage to Supabase
 * This is a one-time utility function
 */
export async function migrateLocalStorageToSupabase(): Promise<{
    success: boolean;
    migrated: string[];
    failed: string[];
}> {
    const migrated: string[] = [];
    const failed: string[] = [];

    try {
        // Get all localStorage keys with CMS data
        const cmsKeys: string[] = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && key.startsWith('cms_data_')) {
                cmsKeys.push(key.replace('cms_data_', ''));
            }
        }

        console.log(`Found ${cmsKeys.length} CMS pages in localStorage`);

        // Migrate each page
        for (const pageId of cmsKeys) {
            try {
                const data = localStorage.getItem(`cms_data_${pageId}`);
                if (data) {
                    const content = JSON.parse(data);
                    const success = await saveCMSContent(pageId, content);

                    if (success) {
                        migrated.push(pageId);
                        console.log(`✓ Migrated ${pageId}`);
                    } else {
                        failed.push(pageId);
                        console.error(`✗ Failed to migrate ${pageId}`);
                    }
                }
            } catch (error) {
                failed.push(pageId);
                console.error(`✗ Error migrating ${pageId}:`, error);
            }
        }

        return {
            success: failed.length === 0,
            migrated,
            failed,
        };
    } catch (error) {
        console.error('Exception during migration:', error);
        return {
            success: false,
            migrated,
            failed,
        };
    }
}

/**
 * Seed database with default data from data.ts
 */
export async function seedDatabaseWithDefaults(
    defaultDataMap: Record<string, any>
): Promise<void> {
    try {
        console.log('Seeding database with default data...');

        for (const [pageId, defaultData] of Object.entries(defaultDataMap)) {
            // Check if data already exists
            const existing = await getCMSContent(pageId);

            if (!existing) {
                console.log(`Seeding ${pageId}...`);
                await saveCMSContent(pageId, defaultData);
            } else {
                console.log(`${pageId} already has data, skipping...`);
            }
        }

        console.log('Database seeding complete!');
    } catch (error) {
        console.error('Error seeding database:', error);
    }
}
