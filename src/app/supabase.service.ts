import { Injectable } from '@angular/core';
import {createClient, SupabaseClient} from "@supabase/supabase-js";
import {environment} from "../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient

  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    )
  }

  async getData ({
    search = { column: 'name' as string, key: '' as string }
  }) {
    return this.supabase
      .from('basic_table')
      .select('*')
      .ilike(search.column, `%${search.key}%`)
  }
}


