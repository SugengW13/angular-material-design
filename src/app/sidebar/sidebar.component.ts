import { Component } from '@angular/core';

import {HeadbarComponent} from "../headbar/headbar.component";

import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  standalone: true,
  imports: [
    HeadbarComponent,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule
  ]
})
export class SidebarComponent {

}
