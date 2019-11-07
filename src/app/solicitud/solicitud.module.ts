import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { SolicitudListComponent } from './solicitud-list/solicitud-list.component';
import { SolicitudService } from './solicitud.service';
import { SolicitudDetailComponent } from './solicitud-detail/solicitud-detail.component';
import { SolicitudCreateComponent } from './solicitud-create/solicitud-create.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule, 
    ReactiveFormsModule
  ],
  declarations: [SolicitudListComponent, SolicitudDetailComponent, SolicitudCreateComponent],
    providers: [SolicitudService],
  exports: [SolicitudListComponent, SolicitudCreateComponent]
})
export class SolicitudModule { }