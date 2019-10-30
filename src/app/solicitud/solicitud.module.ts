import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing/app-routing.module';

import { SolicitudListComponent } from './solicitud-list/solicitud-list.component';
import { SolicitudService } from './solicitud.service';
import { SolicitudDetailComponent } from './solicitud-detail/solicitud-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [SolicitudListComponent, SolicitudDetailComponent],
    providers: [SolicitudService],
  exports: [SolicitudListComponent]
})
export class SolicitudModule { }