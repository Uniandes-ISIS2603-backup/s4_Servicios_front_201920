import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import {ServicioOfrecidoService} from "../servicio-ofrecido.service";
import {ServicioOfrecidoDetail}  from '../servicio-ofrecido-detail';
import {ServicioOfrecido} from "../servicio-ofrecido";

@Component({
  selector: 'app-servicio-ofrecido-detail',
  templateUrl: './servicio-ofrecido-detail.component.html',
  styleUrls: ['./servicio-ofrecido-detail.component.css']
})
export class ServicioOfrecidoDetailComponent implements OnInit {

  constructor(
    private servicioOfrecidoService: ServicioOfrecidoService,
    private route: ActivatedRoute) { }

  servicioOfrecidoDetail: ServicioOfrecidoDetail;
  @Input() servicioOfrecido_id: number;
  loader: any;

   getServicioOfrecidoDetail(): void {
    this.servicioOfrecidoService.getServicioOfrecidoDetail(this.servicioOfrecido_id)
      .subscribe( o =>{this.servicioOfrecidoDetail = o });
    
    }

    onLoad(params) {
    this.servicioOfrecido_id = parseInt(params['id']);
    console.log(" en detail " + this.servicioOfrecido_id);
    this.servicioOfrecidoDetail = new ServicioOfrecidoDetail();
    this.getServicioOfrecidoDetail();
  }
  

   ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
  }

   ngOnDestroy() {
    this.loader.unsubscribe();
  }
}
