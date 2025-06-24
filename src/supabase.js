import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://ypbkactxcuwqtiymnbny.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlwYmthY3R4Y3V3cXRpeW1uYm55Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA2ODY1NDAsImV4cCI6MjA2NjI2MjU0MH0.bhhcyENWWmjF0TeSGfxkJh3ygD8OF5boamvtI65fd6I"
);

export default supabase;
