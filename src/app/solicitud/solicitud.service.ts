import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Solicitud } from './solicitud';
import { SolicitudDetail } from './solicitud-detail';
import { Observable } from 'rxjs';
import { catchError, map, tap } from "rxjs/operators";

import { environment } from '../../environments/environment';

const API_URL = environment.apiURL;
const solicitudes = '/solicitudes';

@Injectable()
export class SolicitudService {
    
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }    
  
    getSolicitudes() : Observable<Solicitud[]> {
        return this.http.get<Solicitud[]>(API_URL + solicitudes);
    }

    getSolicitudDetail(solicitudId): Observable<SolicitudDetail>{
      return this.http.get<SolicitudDetail>(API_URL + solicitudes + '/' + solicitudId);
    }

    createSolicitud(solicitud: Solicitud): Observable<Solicitud> {
      return this.http.post<Solicitud>(API_URL + solicitudes, solicitud, this.httpOptions).pipe(tap((solicitud: Solicitud) => console.log(`added solicitud w/ ${solicitud.descripcion} id=${solicitud.id}`)));
    }
    
}