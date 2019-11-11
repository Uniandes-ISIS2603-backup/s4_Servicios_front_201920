import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { TrabajadorService } from './trabajador.service';
import { TrabajadorListaComponent } from './trabajador-lista/trabajador-lista.component';
import { TrabajadorDetailComponent } from './trabajador-detail/trabajador-detail.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { TrabajadorCreateComponent } from './trabajador-create/trabajador-create.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [TrabajadorListaComponent, TrabajadorDetailComponent, TrabajadorCreateComponent],
  exports: [TrabajadorListaComponent, TrabajadorCreateComponent],
  providers: [TrabajadorService]
})
export class TrabajadorModule { }



