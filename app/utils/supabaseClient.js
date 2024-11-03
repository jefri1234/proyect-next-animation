//CREAR UN ARCHIVO DE CONFIGURACION  PARA INICIALIZAR -----SUPABASE----
// lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://twbfauzwuasnjnaxywlp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR3YmZhdXp3dWFzbmpuYXh5d2xwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyMjUyNTQxOCwiZXhwIjoyMDM4MTAxNDE4fQ.mQtYD18UuJSrVaU_H2WEn46YM5v6I__mxIRhsF-gg6E';

export const supabase = createClient(supabaseUrl, supabaseKey);
