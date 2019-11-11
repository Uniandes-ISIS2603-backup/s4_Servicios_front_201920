import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Trabajador } from "./trabajador";
import { TrabajadorDetail } from "./trabajador-detail";
import { Observable } from "rxjs";
import { environment } from '../../environments/environment';
import { catchError, map, tap } from "rxjs/operators";


const API_URL = environment.apiURL;
const admins = "/trabajadores";

@Injectable()
export class TrabajadorService {

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };
  
  constructor(private http: HttpClient) { }

  getTrabajadores(): Observable<Trabajador[]> {
    return this.http.get<Trabajador[]>(API_URL + admins);
  }

  getTrabajadorDetail(adminId): Observable<TrabajadorDetail> {
    return this.http.get<TrabajadorDetail>(API_URL + "admin" + adminId + ".json"
    );
  }

  createTrabajador(admin: Trabajador): Observable<Trabajador> {
    return this.http.post<Trabajador>(API_URL + admins, admin, this.httpOptions).pipe(tap((admin: Trabajador) => console.log(`added solicitud w/ ${admin.nombre} id=${admin.id}`)));
  }

}
