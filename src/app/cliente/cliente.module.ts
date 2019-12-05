import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteService } from './cliente.service';
import { ClienteDetailComponent } from './cliente-detail/cliente-detail.component';
import { ClienteCreateComponent } from './cliente-create/cliente-create.component';
import{ AppRoutingModule } from '../app-routing/app-routing.module';
import { SolicitudModule } from '../solicitud/solicitud.module';
import { ClienteSolicitudesComponent } from './cliente-solicitudes/cliente-solicitudes.component';
import { ClienteAddSolicitudComponent } from './cliente-add-solicitud/cliente-add-solicitud.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,  
    SolicitudModule,
    NgbModule
  ],
  declarations: [ClienteListComponent, ClienteDetailComponent, ClienteCreateComponent, ClienteAddSolicitudComponent, ClienteSolicitudesComponent],
  exports : [ClienteListComponent, ClienteCreateComponent],
  providers: [ClienteService]
})
export class ClienteModule { }