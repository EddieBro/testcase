import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ItemComponent } from './list-item/item/item.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AboutComponent } from './about/about.component';
import {RouterModule, Routes} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import { PoeTestComponent } from './poe-test/poe-test.component';




@NgModule({
  declarations: [
    AppComponent,
    ListItemComponent,
    ItemComponent,
    AboutComponent,
    PoeTestComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

