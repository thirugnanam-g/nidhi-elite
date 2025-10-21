import { createBrowserClient } from "@supabase/ssr"

const supabaseUrl = process.env.SUPABASE_NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = proSUPABASE_NEXT_PUBLIC_SUPABASE_ANON_KEY_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase environment variables")
}

export const supabase = createBrowserClient(supabaseUrl, supabaseAnonKey)
