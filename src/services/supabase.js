import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bzvevzrgikgrfucxdber.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ6dmV2enJnaWtncmZ1Y3hkYmVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDExMTA1NDgsImV4cCI6MjAxNjY4NjU0OH0.hxBrrmfA7Ej4BsU0YEli_NEWglyaQLMs7ra9nX1a0jI';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
