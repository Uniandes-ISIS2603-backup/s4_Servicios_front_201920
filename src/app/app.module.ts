import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { AdminModule } from './admin/admin.module';

import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing/app-routing.module';


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, AdminModule, ReactiveFormsModule, AppRoutingModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }