import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgxPermissionsGuard} from 'ngx-permissions';

import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';
import { FacturaListComponent } from '../factura/factura-list/factura-list.component';
import { FacturaDetailComponent } from '../factura/factura-detail/factura-detail.component';
import { FacturaCreateComponent } from '../factura/factura-create/factura-create.component';


const routes: Routes = [
    {
        path: 'facturas',
        children:[{
          path: 'list',
          component: FacturaListComponent,
        },
        {
          path: ':id',
          component: FacturaDetailComponent,
        },
        {
          path: 'create',
          component: FacturaCreateComponent,
        }
        ]
      },
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
    {
        path: '**',
        redirectTo: 'home',
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
