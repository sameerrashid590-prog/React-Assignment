import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nccrusutmrptcozhnauk.supabase.co";
const supabaseKey = "asb_publishable_RcSHK-tS_woDf0SxG7LzsQ_Gj-FiKKX}";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);