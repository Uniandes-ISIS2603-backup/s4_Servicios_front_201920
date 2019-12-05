import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

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
        private toastrService: ToastrService,
        private router: Router
    ){}

    createCliente(): Cliente {
        // Process checkout data here
    
        this.clienteService.createCliente(this.cliente)
            .subscribe((cliente) => {
                 this.cliente.id = cliente.id;
                 this.router.navigate(['/clientes/' + cliente.usuario+ '/' + cliente.contrasena]);
                }, err => {
                this.toastrService.error(err, "Error");
            });
        return this.cliente;
      }

      navigate1():void{
        this.router.navigate(['/cliente/list']);
      }

      cancelCreation(): void{
          this.toastrService.warning('The cliente wasn\'t created', 'Cliente creation');
        this.router.navigate(['']);
      }

      ngOnInit() {
        this.cliente = new Cliente();
      }

}