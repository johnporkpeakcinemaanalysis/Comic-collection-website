// Paste your two Supabase values here (Supabase dashboard > Project Settings > API Keys, or the Connect button).
// The publishable key (sb_publishable_...) is safe to publish: the database rules in schema.sql decide who can see what.
// NEVER paste the secret key (sb_secret_...) or service_role key here.
// Leave both empty to run Longbox in single-user mode that saves only in this browser.
window.LONGBOX_CONFIG = {
  supabaseUrl: "https://vqsnpewmlozerijqppxs.supabase.co",      // e.g. "https://abcdefghijkl.supabase.co"
  supabaseAnonKey: "sb_publishable_cS7Bzm_YZyJLW6CM917Pgg_VzKHZJ_G"   // "sb_publishable_..." (or the legacy "anon" key)
};
