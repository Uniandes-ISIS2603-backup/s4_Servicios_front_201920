import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente';
import { ClienteDetail } from '../cliente-detail';
import { ClienteSolicitudesComponent } from '../cliente-solicitudes/cliente-solicitudes.component';

@Component({
  selector: 'app-cliente-detail',
  templateUrl: './cliente-detail.component.html',
  styleUrls: ['./cliente-detail.component.css']
})
export class ClienteDetailComponent implements OnInit {

 
  constructor(
    private clienteService : ClienteService,
    private route : ActivatedRoute
  ) { }

  clienteDetail : ClienteDetail;

  @Input() clienteUser : string;

  @Input() clientePassword : string;

  @ViewChild(ClienteSolicitudesComponent) solicitudListComponent: ClienteSolicitudesComponent;


  loader: any;

  toggleSolicitudes(): void {
    
    this.solicitudListComponent.isCollapsed = !this.solicitudListComponent.isCollapsed;
}

updateSolicitudes(): void {
  this.getClienteDetail();
  this.solicitudListComponent.updateSolicitudes(this.clienteDetail.servicios);
  this.solicitudListComponent.isCollapsed = false;
}

  getClienteDetail(): void{
  this.clienteService.getClienteDetail(this.clienteUser, this.clientePassword)
  .subscribe( o => {
     this.clienteDetail = o
  });
}

onLoad(params) {

  this.clienteUser = params['user'];
  this.clientePassword = params['password'];
  console.log(" en detail " + this.clienteUser);
  this.clienteDetail = new ClienteDetail();
  this.getClienteDetail();
}

ngOnInit() {
  this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
 }

}