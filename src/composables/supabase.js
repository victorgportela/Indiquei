import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ndqechgjhiqxqesnnitc.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5kcWVjaGdqaGlxeHFlc25uaXRjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMyNTM0NzYsImV4cCI6MjA0ODgyOTQ3Nn0.j8VVQoI956BxKW8LZs54O_FzjAHqvUtFyuRkfP_GWro"
export const supabase = createClient(supabaseUrl, supabaseKey);
