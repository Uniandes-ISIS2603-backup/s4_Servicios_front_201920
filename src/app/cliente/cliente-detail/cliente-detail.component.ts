import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente';
import { ClienteDetail } from '../cliente-detail';

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

  @Input() clienteId : number;

  loader: any;

  getClienteDetail(): void{
  this.clienteService.getClienteDetail(this.clienteId)
  .subscribe( o => {
     this.clienteDetail = o
  });
}

onLoad(params) {

  this.clienteId = parseInt(params['id']);
  console.log(" en detail " + this.clienteId);
  this.clienteDetail = new ClienteDetail();
  this.getClienteDetail();
}

ngOnInit() {
  this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
 }

}