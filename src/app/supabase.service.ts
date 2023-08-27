import { Injectable } from '@angular/core';
import {createClient, SupabaseClient} from "@supabase/supabase-js";
import {environment} from "../environments/environment.development";

export interface DataSupabase {
  id: number
  created_at: Date
  name: string
}

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

  async getData () {
    const { data } = await this.supabase
      .from('basic_table')
      .select('*')
    console.log(data)
  }
}


