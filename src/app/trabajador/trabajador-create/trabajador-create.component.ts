import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

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
        private toastrService: ToastrService,
        private router: Router
    ){}

    createTrabajador(): Trabajador {
        // Process checkout data here
    
        this.trabajadorService.createTrabajador(this.trabajador)
            .subscribe((trabajador) => {
                 this.trabajador.id = trabajador.id;
                 this.router.navigate(['/trabajadores/' + trabajador.usuario + '/' + trabajador.contrasena]);
                }, err => {
                this.toastrService.error(err, "Error");
            });
        return this.trabajador;
      }

      cancelCreation(): void{
        this.toastrService.warning('The trabajador wasn\'t created', 'Trabajador creation');
        this.router.navigate(['']);
          }

      ngOnInit() {
        this.trabajador = new Trabajador();
      }

}