import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {ClienteListComponent} from '../cliente/cliente-list/cliente-list.component';
import {ClienteDetailComponent} from '../cliente/cliente-detail/cliente-detail.component';

const routes : Routes = [
  { 
    path : 'clientes',
    children: [
      { 
        path: 'list',
        component: ClienteListComponent
      },
      { 
        path: ':id',
        component: ClienteDetailComponent
      }
    ]
  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
  ],
  exports : [RouterModule],
  declarations: []
})
export class AppRoutingModule { }