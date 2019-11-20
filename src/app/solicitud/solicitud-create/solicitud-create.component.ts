import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

import { SolicitudDetail } from "../solicitud-detail";
import { SolicitudService } from "../solicitud.service";

/**
 * The component create of solicitudes
 */
@Component({
    selector: 'app-solicitud-create',
    templateUrl: './solicitud-create.component.html', 
    styleUrls: ['./solicitud-create.component.css']
})
export class SolicitudCreateComponent{

    solicitud: SolicitudDetail;

    constructor(
        private solicitudService: SolicitudService,
        private toastrService: ToastrService,
        private router: Router
    ){
    }



    createSolicitud(): SolicitudDetail {
    
        this.solicitudService.createSolicitud(this.solicitud)
            .subscribe((solicitud) => {
                 this.solicitud = solicitud;
                 this.router.navigate(['/solicitudes/' + solicitud.id]);
                }, err => {
                this.toastrService.error(err, "Error");
            });
        return this.solicitud;
      }

      cancelCreation(): void{
        this.toastrService.warning('The solicitud wasn\'t created', 'Solicitud creation');
        this.router.navigate(['/solicitudes/list']);
      }

      ngOnInit() {
        this.solicitud = new SolicitudDetail();
      }

}