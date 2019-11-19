import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {ToastrService} from 'ngx-toastr';

import { Cliente } from "../cliente";
import { ClienteService } from "../cliente.service";

/**
 * The component create of cliente
 */
@Component({
    selector: 'app-cliente-create',
    templateUrl: './cliente-create.component.html', 
    styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent{

    cliente: Cliente;

    constructor(
        private clienteService: ClienteService,
        private toastrService: ToastrService
    ){
    }

    @Output() cancel = new EventEmitter();

    @Output() create = new EventEmitter();


    createCliente(): Cliente {
        // Process checkout data here
    
        this.clienteService.createCliente(this.cliente)
            .subscribe((cliente) => {
                 this.cliente = cliente;
                 this.create.emit();
                 this.toastrService.success("The Cliente was created", "Cliente creation");
            }, err => {
                this.toastrService.error(err, "Error");
            });
        return this.cliente;
      }

      cancelCreation(): void{
          this.cancel.emit();
      }

      ngOnInit() {
        this.cliente = new Cliente();
      }

}