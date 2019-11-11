import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {ToastrService} from 'ngx-toastr';

import { Trabajador } from "../trabajador";
import { TrabajadorService } from "../trabajador.service";

/**
 * The component create of solicitudes
 */
@Component({
    selector: 'app-trabajador-create',
    templateUrl: './trabajador-create.component.html', 
    styleUrls: ['./trabajador-create.component.css']
})
export class TrabajadorCreateComponent{

    trabajador: Trabajador;

    constructor(
        private trabajadorService: TrabajadorService,
        private toastrService: ToastrService
    ){
    }

    @Output() cancel = new EventEmitter();

    @Output() create = new EventEmitter();


    createTrabajador(): Trabajador {
        // Process checkout data here
    
        this.trabajadorService.createTrabajador(this.trabajador)
            .subscribe((trabajador) => {
                 this.trabajador = trabajador;
                 this.create.emit();
                 this.toastrService.success("The Trabajador was created", "Trabajador creation");
            }, err => {
                this.toastrService.error(err, "Error");
            });
        return this.trabajador;
      }

      cancelCreation(): void{
          this.cancel.emit();
      }

      ngOnInit() {
        this.trabajador = new Trabajador();
      }

}