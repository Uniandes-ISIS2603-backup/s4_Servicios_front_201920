import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServicioOfrecido } from './servicio-ofrecido';
import { ServicioOfrecidoDetail } from './servicio-ofrecido-detail';
import { Observable } from 'rxjs';

import {environment} from '../../environments/environment';

const API_URL = environment.apiURL;
const serviciosOfrecidos = '/serviciosOfrecidos';

@Injectable()
export class ServicioOfrecidoService {

  constructor(private http: HttpClient) { 
      console.log(API_URL)
  }
  
  getServiciosOfrecidos() : Observable<ServicioOfrecido[]> {
        return this.http.get<ServicioOfrecido[]>(API_URL + serviciosOfrecidos);
  }

  getServicioOfrecidoDetail(servicioOfrecidoId) : Observable<ServicioOfrecidoDetail> {
        return this.http.get<ServicioOfrecidoDetail>(API_URL +  serviciosOfrecidos +'/' + servicioOfrecidoId);
  }

  createServicioOfrecido(servicioOfrecido): Observable<ServicioOfrecidoDetail> {
        var obj = {descripcion: servicioOfrecido.descripcion, precio: servicioOfrecido.precio, nombre: servicioOfrecido.nombre, tipo: servicioOfrecido.tipo}
      console.log(obj);
    return this.http.post<ServicioOfrecidoDetail>(API_URL +serviciosOfrecidos, obj);
}
}