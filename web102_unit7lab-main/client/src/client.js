import { createClient } from '@supabase/supabase-js'

const URL = 'https://phxmbzcmvjdctfceeqpk.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBoeG1iemNtdmpkY3RmY2VlcXBrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA2NTU1MjMsImV4cCI6MTk5NjIzMTUyM30._LfC4fFuWmNKeanbNn2Us5balCD8zNB0qGuw9t1PWz8';

export const supabase = createClient(URL, API_KEY);