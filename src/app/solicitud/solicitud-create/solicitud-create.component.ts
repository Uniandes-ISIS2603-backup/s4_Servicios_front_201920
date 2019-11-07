import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

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

    solicitudForm: FormGroup;

    constructor(
        private solicitudService: SolicitudService,
        private formBuilder: FormBuilder
    ){
        this.solicitudForm = this.formBuilder.group({
            id: ["", [Validators.required]],
            description: ["", [Validators.required, Validators.minLength(5)]]
        });
    }

    createSolicitud(newSolicitud: Solicitud) {
        // Process checkout data here
        console.warn("Your order has been submitted", newSolicitud);
    
       this.solicitudForm.reset();
      }
}