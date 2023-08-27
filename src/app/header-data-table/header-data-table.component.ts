import { Component } from '@angular/core';
import {NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";

@Component({
  selector: 'app-header-data-table',
  templateUrl: './header-data-table.component.html',
  styleUrls: ['./header-data-table.component.css'],
  standalone: true,
  imports: [
    NgIf,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class HeaderDataTableComponent {
  searchKey: string | null = null

  onChangeSearchKey () {
    console.log(this.searchKey)
  }
}
