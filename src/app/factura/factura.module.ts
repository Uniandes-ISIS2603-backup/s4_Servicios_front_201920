import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacturaService } from './factura.service';
import { FacturaListComponent } from './factura-list/factura-list.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { FacturaDetailComponent } from './factura-detail/factura-detail.component';
import {ReactiveFormsModule} from '@angular/forms';
import { FacturaCreateComponent } from './factura-create/factura-create.component';

@NgModule({
  imports: [
    CommonModule, AppRoutingModule
  ],
  declarations: [FacturaListComponent, FacturaDetailComponent, FacturaCreateComponent],
  providers: [FacturaService],
  exports:[FacturaListComponent, FacturaCreateComponent]
})
export class FacturaModule { }