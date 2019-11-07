import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente';
import { ClienteDetail } from '../cliente-detail';

@Component({
  selector: 'app-cliente-detail',
  templateUrl: './cliente-detail.component.html',
  styleUrls: ['./cliente-detail.component.css']
})
export class ClienteDetailComponent implements OnInit {

  clienteDetail : ClienteDetail;
  clienteId : number;

  constructor(
    private clienteService : ClienteService,
    private route : ActivatedRoute
  ) { }

  getClienteDetail(): void {
    this.clienteService.getClienteDetail(this.clienteId).subscribe(objetoClienteDetail => {this.clienteDetail = objetoClienteDetail});
  }

  ngOnInit() {
    this.clienteId = +this.route.snapshot.paramMap.get('id');
    this.clienteDetail = new ClienteDetail();
    this.getClienteDetail();
  }

}