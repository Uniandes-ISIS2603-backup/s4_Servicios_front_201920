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
    return this.http.get<TrabajadorDetail>(API_URL + admins + '/' + adminId);
  }

  createTrabajador(admin: Trabajador): Observable<TrabajadorDetail> {
    return this.http.post<TrabajadorDetail>(API_URL + admins, admin);
  }

}
