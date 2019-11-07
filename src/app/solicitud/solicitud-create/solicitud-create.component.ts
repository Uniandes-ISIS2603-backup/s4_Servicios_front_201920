import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {ToastrService} from 'ngx-toastr';

import { Solicitud } from "../solicitud";
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

    solicitud: Solicitud;

    constructor(
        private solicitudService: SolicitudService,
        private toastrService: ToastrService
    ){
    }

    @Output() cancel = new EventEmitter();

    @Output() create = new EventEmitter();


    createSolicitud(): Solicitud {
        // Process checkout data here
    
        this.solicitudService.createSolicitud(this.solicitud)
            .subscribe((solicitud) => {
                 this.solicitud = solicitud;
                 this.create.emit();
                 this.toastrService.success("The solicitud was created", "Solicitud creation");
            }, err => {
                this.toastrService.error(err, "Error");
            });
        return this.solicitud;
      }

      cancelCreation(): void{
          this.cancel.emit();
      }

      ngOnInit() {
        this.solicitud = new Solicitud();
      }

}