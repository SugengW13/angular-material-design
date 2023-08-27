import { Injectable } from '@angular/core';
import {createClient, SupabaseClient} from "@supabase/supabase-js";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient

  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl as string,
      environment.supabaseKey as string
    )
  }

  async getData () {
    let { data } = await this.supabase
      .from('basic-table')
      .select('*')
    console.log(data)
  }
}


