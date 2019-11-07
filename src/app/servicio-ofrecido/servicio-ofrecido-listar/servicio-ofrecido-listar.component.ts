import { Component, OnInit } from '@angular/core';

import{ServicioOfrecido} from "../servicio-ofrecido";
import {ServicioOfrecidoService} from "../servicio-ofrecido.service";


@Component({
  selector: 'app-servicio-ofrecido-listar',
  templateUrl: './servicio-ofrecido-listar.component.html',
})

export class ServicioOfrecidoListarComponent implements OnInit {

  
  
  constructor(private servicioOfrecidoService: ServicioOfrecidoService) {

  }
  servicios: ServicioOfrecido[];


   getServiciosOfrecidos() {
    
        this.servicioOfrecidoService.getServiciosOfrecidos().subscribe(servicio => this.servicios = servicio);
        
        
    }

  ngOnInit() {
    this.getServiciosOfrecidos();
  }
}
 