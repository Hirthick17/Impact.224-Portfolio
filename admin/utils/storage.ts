// Supabase Storage Utilities - Replaces LocalStorage with Supabase
import { getCMSContent as getSupabaseCMSContent, saveCMSContent as saveSupabaseCMSContent, subscribeToCMSUpdates as supabaseSubscribe } from '../../lib/cms-service';


const CMS_DATA_PREFIX = 'cms_data_';
const BROADCAST_CHANNEL_NAME = 'cms_updates';

// Create broadcast channel for cross-tab communication (still useful for immediate UI updates)
let broadcastChannel: BroadcastChannel | null = null;

if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
    broadcastChannel = new BroadcastChannel(BROADCAST_CHANNEL_NAME);
}

// Get CMS data for a specific page (now from Supabase)
export function getCMSData<T>(pageId: string): T | null {
    if (typeof window === 'undefined') return null;

    // This is now a synchronous wrapper that returns cached data
    // The actual async fetching happens in the CMSContext
    // For backward compatibility, we'll check localStorage first (during migration)
    const key = `${CMS_DATA_PREFIX}${pageId}`;
    const data = localStorage.getItem(key);

    if (!data) return null;

    try {
        return JSON.parse(data) as T;
    } catch (error) {
        console.error(`Error parsing CMS data for ${pageId}:`, error);
        return null;
    }
}

// Save CMS data for a specific page (now to Supabase)
export async function saveCMSData<T>(pageId: string, data: T): Promise<void> {
    if (typeof window === 'undefined') return;

    // Stage 2: Log before posting to database
    console.log('💾 [STORAGE] Preparing to save to database...', {
        pageId,
        timestamp: new Date().toISOString(),
        dataSize: JSON.stringify(data).length + ' bytes',
    });

    // Save to Supabase
    const success = await saveSupabaseCMSContent(pageId, data);

    if (success) {
        console.log('✅ [STORAGE] Successfully saved to database', {
            pageId,
            timestamp: new Date().toISOString(),
        });

        // Also save to localStorage for backward compatibility during migration
        const key = `${CMS_DATA_PREFIX}${pageId}`;
        localStorage.setItem(key, JSON.stringify(data));

        // Broadcast the change to other tabs
        if (broadcastChannel) {
            broadcastChannel.postMessage({
                type: 'cms_update',
                pageId,
                timestamp: Date.now(),
            });
        }
    } else {
        console.error(`❌ [STORAGE] Failed to save CMS data for ${pageId} to Supabase`);
    }
}

// Listen for CMS updates from other tabs or Supabase
export function onCMSUpdate(callback: (pageId: string) => void): () => void {
    const cleanupFunctions: Array<() => void> = [];

    // Listen to BroadcastChannel for same-tab updates
    if (broadcastChannel) {
        const handler = (event: MessageEvent) => {
            if (event.data.type === 'cms_update') {
                callback(event.data.pageId);
            }
        };

        broadcastChannel.addEventListener('message', handler);
        cleanupFunctions.push(() => {
            if (broadcastChannel) {
                broadcastChannel.removeEventListener('message', handler);
            }
        });
    }

    // Return cleanup function
    return () => {
        cleanupFunctions.forEach(cleanup => cleanup());
    };
}

// Get all CMS data keys
export function getAllCMSKeys(): string[] {
    if (typeof window === 'undefined') return [];

    const keys: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith(CMS_DATA_PREFIX)) {
            keys.push(key.replace(CMS_DATA_PREFIX, ''));
        }
    }
    return keys;
}

// Clear all CMS data
export function clearAllCMSData(): void {
    if (typeof window === 'undefined') return;

    const keys = getAllCMSKeys();
    keys.forEach(pageId => {
        localStorage.removeItem(`${CMS_DATA_PREFIX}${pageId}`);
    });
}

// Check if CMS data exists for a page
export function hasCMSData(pageId: string): boolean {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem(`${CMS_DATA_PREFIX}${pageId}`) !== null;
}

// Initialize default CMS data if not exists
export async function initializeCMSData<T>(pageId: string, defaultData: T): Promise<void> {
    // Check Supabase first
    const existingData = await getSupabaseCMSContent<T>(pageId);

    if (!existingData) {
        // Save default data to Supabase
        await saveSupabaseCMSContent(pageId, defaultData);
    }
}
