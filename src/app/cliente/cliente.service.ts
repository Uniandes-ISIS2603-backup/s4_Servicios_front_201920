import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { catchError, map, tap } from "rxjs/operators";

import { Cliente } from './cliente'; 
import { ClienteDetail } from './cliente-detail';

const API_URL =  environment.apiURL;
const clientes = '/clientes';

@Injectable()
export class ClienteService {

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(private http : HttpClient) {}

  getClientes(): Observable<Cliente[]>{
     return this.http.get<Cliente[]>(API_URL + clientes);
  }

  getClienteDetail(clienteUser, clientePassword): Observable<ClienteDetail> {
    return this.http.get<ClienteDetail>(API_URL + clientes + '/' + clienteUser + '/' + clientePassword);
  }

  createCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(API_URL + clientes, cliente, this.httpOptions).pipe(tap((cliente: Cliente) => console.log(`added cliente w/ ${cliente.nombre} id=${cliente.id}`)));
  }
}