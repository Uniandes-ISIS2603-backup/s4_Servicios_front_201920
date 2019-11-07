import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgxPermissionsGuard} from 'ngx-permissions';

import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';
import {ServicioOfrecidoListarComponent} from '../servicio-ofrecido/servicio-ofrecido-listar/servicio-ofrecido-listar.component';
import {ServicioOfrecidoDetailComponent} from '../servicio-ofrecido/servicio-ofrecido-detail/servicio-ofrecido-detail.component';
import {ServicioOfrecidoCreateComponent} from '../servicio-ofrecido/servicio-ofrecido-create/servicio-ofrecido-create.component';

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
  /*  {
        path: '**',
        redirectTo: 'home',
    }, */
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
      }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {

}
