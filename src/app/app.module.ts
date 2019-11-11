import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {ToastrModule} from 'ngx-toastr';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { TrabajadorModule } from './trabajador/trabajador.module';

import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing/app-routing.module';


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, TrabajadorModule, ReactiveFormsModule, AppRoutingModule, ToastrModule.forRoot({timeOut: 10000, positionClass: 'toast-bottom-right', preventDuplicates: true,}) ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }