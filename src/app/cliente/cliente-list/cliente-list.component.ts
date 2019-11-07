import { Component, OnInit } from '@angular/core';
import {Cliente} from '../cliente';
import {ClienteService} from '../cliente.service'

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  clientes : Cliente[];
  // No sé si esto funcione o toque meterlo directo al constructor
  private clienteService : ClienteService;

  constructor(pClienteService : ClienteService) {
    this.clienteService = pClienteService;
  }
  
  getClientes() : void {
    this.clienteService.getClientes().subscribe(losClientes => this.clientes = losClientes);
  }

  ngOnInit() {
    this.getClientes();
  }

}