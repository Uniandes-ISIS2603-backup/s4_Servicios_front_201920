import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Solicitud } from './solicitud';
import { SolicitudDetail } from './solicitud-detail';
import { Observable } from 'rxjs';

const API_URL = "../../assets/";
const solicitudes = 'solicitudes.json';

@Injectable()
export class SolicitudService {
    
    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }    
  
    getSolicitudes() : Observable<Solicitud[]> {
        return this.http.get<Solicitud[]>(API_URL + solicitudes);
    }

    getSolicitudDetail(solicitudId): Observable<SolicitudDetail>{
      return this.http.get<SolicitudDetail>(API_URL + "solicitud-" + solicitudId +".json");
    }
    
}