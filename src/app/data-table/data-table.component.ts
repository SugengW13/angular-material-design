import { Component, OnInit } from '@angular/core';
import {NgIf} from "@angular/common";
import {MatTableModule} from "@angular/material/table";
import {SupabaseService} from "../supabase.service";

export interface DataSupabase {
  id: number
  created_at: Date
  name: string
}

export interface ResponseDataSupabase {
  error?: any
  data: DataSupabase[]
}

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
  standalone: true,
  imports: [ NgIf, MatTableModule ]
})
export class DataTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'created_at', 'name'];
  loading = false as boolean
  dataSupabase: DataSupabase[] = []

  constructor(
    private readonly supabase: SupabaseService
  ) { }

  async ngOnInit(): Promise<void> {
    await this.getDataSupabase()
  }

  async getDataSupabase () {
    this.loading = true

    await this.supabase.getData()
      .then((response) => {
        this.dataSupabase = response.data as DataSupabase[]
      })

    this.loading = false
  }
}
