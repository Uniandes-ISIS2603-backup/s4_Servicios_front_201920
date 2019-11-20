import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {NgxPermissionsGuard} from 'ngx-permissions';

import {ClienteListComponent} from '../cliente/cliente-list/cliente-list.component';
import {ClienteDetailComponent} from '../cliente/cliente-detail/cliente-detail.component';
import { ClienteCreateComponent } from "../cliente/cliente-create/cliente-create.component"

import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';
import {ServicioOfrecidoListarComponent} from '../servicio-ofrecido/servicio-ofrecido-listar/servicio-ofrecido-listar.component';
import {ServicioOfrecidoDetailComponent} from '../servicio-ofrecido/servicio-ofrecido-detail/servicio-ofrecido-detail.component';
import {ServicioOfrecidoCreateComponent} from '../servicio-ofrecido/servicio-ofrecido-create/servicio-ofrecido-create.component';

import { FacturaListComponent } from '../factura/factura-list/factura-list.component';
import { FacturaDetailComponent } from '../factura/factura-detail/factura-detail.component';
import { FacturaCreateComponent } from '../factura/factura-create/factura-create.component';

import { SolicitudListComponent } from '../solicitud/solicitud-list/solicitud-list.component';
import { SolicitudDetailComponent } from '../solicitud/solicitud-detail/solicitud-detail.component';
import { SolicitudCreateComponent } from '../solicitud/solicitud-create/solicitud-create.component';

import { TrabajadorListaComponent } from "../trabajador/trabajador-lista/trabajador-lista.component";
import { TrabajadorDetailComponent } from "../trabajador/trabajador-detail/trabajador-detail.component";
import { TrabajadorCreateComponent } from "../trabajador/trabajador-create/trabajador-create.component"
const routes: Routes = [
   

    {
      path: 'auth',
      children: [
        {
          path: 'login',
          component: AuthLoginComponent,
          canActivate: [NgxPermissionsGuard],
          data: {
          permissions: {        
              only: ['GUEST']
            }
          }
        },
        {
          path: ':sign-up',
          component: AuthSignUpComponent,
          canActivate: [NgxPermissionsGuard],
          data: {
          permissions: {
              only: ['GUEST']
             }
            }
        }
      ]   
    },
    {
      path: 'home',
      component: AuthLoginComponent
    },
    //  {
    //  path: '**',
    //  redirectTo: 'home',
    //  },
    {
    path: 'solicitudes',
    children: [{
      path: 'list',
      component: SolicitudListComponent 
      },
      {
        path: ':id',
        component: SolicitudDetailComponent,
        runGuardsAndResolvers: 'always'
      },
      {
        path:'add',
        component: SolicitudCreateComponent
    }
      ]
    },
    {
        path: 'serviciosOfrecidos',
        children:[{
          path: 'list',
          component:ServicioOfrecidoListarComponent
        },
        {
          path:':id',
          component: ServicioOfrecidoDetailComponent,
          outlet: 'detail'
        },
        {
            path:'add',
            component: ServicioOfrecidoCreateComponent,
        }
        ]
    },
  { 
    path : 'clientes',
    children: [
      { 
        path: 'list',
        component: ClienteListComponent
      },
      { 
        path: ':id',
        component: ClienteDetailComponent,
        outlet: "detail"
      },
      {
        path:'add',
        component: ClienteCreateComponent
      }
    ]
  },
  {
    path: "trabajadores",
    children: [
      {
        path: "lista",
        component: TrabajadorListaComponent
      },
      {
        path: ":id",
        component: TrabajadorDetailComponent,
        outlet: "detail"
      },
      {
        path:'add',
        component: TrabajadorCreateComponent,
      }
    ]
  }, 
   {
        path: 'facturas',
        children:[{
          path: 'list',
          component: FacturaListComponent,
        },
        {
          path: ':id',
          component: FacturaDetailComponent,
          outlet: "detail"
        },
        {
          path: 'add',
          component: FacturaCreateComponent,
        }
        ]
    }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { onSameUrlNavigation: "reload" })
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
