import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminService } from './admin.service';
import { AdminListaComponent } from './admin-lista/admin-lista.component';
import { AdminDetailComponent } from './admin-detail/admin-detail.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [AdminListaComponent, AdminDetailComponent],
  exports: [AdminListaComponent],
  providers: [AdminService]
})
export class AdminModule { }



