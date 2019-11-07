import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing/app-routing.module';


import { ServicioOfrecidoListarComponent } from './servicio-ofrecido-listar/servicio-ofrecido-listar.component';
import { ServicioOfrecidoService } from './servicio-ofrecido.service';
import { ServicioOfrecidoDetailComponent } from './servicio-ofrecido-detail/servicio-ofrecido-detail.component';
import { ServicioOfrecidoCreateComponent } from './servicio-ofrecido-create/servicio-ofrecido-create.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule,FormsModule,AppRoutingModule, ReactiveFormsModule],
  declarations: [ServicioOfrecidoListarComponent, ServicioOfrecidoDetailComponent, ServicioOfrecidoCreateComponent],
  providers: [ServicioOfrecidoService],
  exports: [ServicioOfrecidoListarComponent]
})
export class ServicioOfrecidoModule { }