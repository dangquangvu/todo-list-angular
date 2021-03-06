import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonCreatedComponent } from './button-created/button-created.component';
import { HeaderComponent } from './header/header.component';
import { TableComponent } from './table/table.component';
import {FormsModule} from '@angular/forms';
import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
    ButtonCreatedComponent,
    HeaderComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
