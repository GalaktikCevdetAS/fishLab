import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

let client: SupabaseClient | null = null;

if (supabaseUrl && supabaseAnonKey) {
  try {
    client = createClient(supabaseUrl, supabaseAnonKey);
  } catch (err) {
    console.warn('Supabase başlatılamadı, yerel modda çalışılıyor:', err);
  }
} else {
  // Geliştirme ortamında veya env tanımlı değilken uygulamanın çökmesini engeller
  if (process.env.NODE_ENV === 'development') {
    console.warn('Supabase ortam değişkenleri tanımlı değil. Simülatör yerel modda çalışıyor.');
  }
}

export const supabase = client;
