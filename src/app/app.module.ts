import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpErrorInterceptor} from './interceptors/httperrorinterceptor.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ModalDialogModule } from 'ngx-modal-dialog';
import {NgxPaginationModule} from 'ngx-pagination';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ToastrModule} from 'ngx-toastr';
import {NgxPermissionsModule} from 'ngx-permissions';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { SolicitudModule } from './solicitud/solicitud.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AuthModule } from './auth/auth.module';

@NgModule({
  imports: [
     HttpClientModule,
     BrowserModule,
     FormsModule, 
     AppRoutingModule, 
     SolicitudModule, 
     BrowserAnimationsModule, 
     ModalDialogModule.forRoot(),
     AuthModule,
     ToastrModule.forRoot({
        timeOut: 10000,
        positionClass: 'toast-bottom-right',
        preventDuplicates: true,
    }),
    NgxPaginationModule,
    NgxPermissionsModule.forRoot(),
    NgbModule
  ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: HttpErrorInterceptor,
        multi: true
    }
]
})
export class AppModule { }



