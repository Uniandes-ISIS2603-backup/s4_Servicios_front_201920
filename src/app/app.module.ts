import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import{ AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import {ClienteModule} from './cliente/cliente.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ClienteModule, HttpClientModule, AppRoutingModule],
  declarations: [ AppComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }