// Supabase Client Configuration
import { createClient } from '@supabase/supabase-js';

// Get Supabase credentials from environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Validate environment variables
if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
        'Missing Supabase environment variables. Please ensure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are set in .env.local'
    );
}

// Create and export Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        persistSession: false, // We're not using auth yet
    },
    realtime: {
        params: {
            eventsPerSecond: 10,
        },
    },
});

// Database types for type safety
export interface CMSContentRow {
    id: string;
    page_id: string;
    content: Record<string, any>;
    created_at: string;
    updated_at: string;
}

// Type for database operations
export type Database = {
    public: {
        Tables: {
            cms_content: {
                Row: CMSContentRow;
                Insert: Omit<CMSContentRow, 'id' | 'created_at' | 'updated_at'>;
                Update: Partial<Omit<CMSContentRow, 'id' | 'created_at' | 'updated_at'>>;
            };
        };
    };
};
