import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DataTableComponent } from './data-table/data-table.component';
import { HeaderDataTableComponent } from './header-data-table/header-data-table.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SidebarComponent,
    DataTableComponent,
    HeaderDataTableComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
