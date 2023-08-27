import { Component } from '@angular/core';
import {SupabaseService} from "./supabase.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-material-design';

  constructor(
    private readonly supabase: SupabaseService
  ) {
    this.getDataSupabase().then()
  }

  async getDataSupabase () {
    await this.supabase.getData()
  }
}
