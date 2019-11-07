import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Factura} from './factura';
import {FacturaDetail} from './factura-detail';
import {Observable, of} from 'rxjs';
import { catchError, map, tap } from "rxjs/operators";

const API_URL = "../../assets/";
const facturas = "facturas.json";

@Injectable({ providedIn: "root" })
export class FacturaService{

  constructor(private http: HttpClient) { }

  getFacturas(): Observable<Factura[]>{
    console.log(API_URL + facturas);
    return this.http.get<Factura[]>(API_URL + facturas);
  }

  getFacturaDetail(facturaId): Observable<FacturaDetail>{
    return this.http.get<FacturaDetail>(API_URL + 'factura' + facturaId + ".json");
  }

  private facturasUrl = "api/facturas"; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  /** GET clientes from the server */
  getFacturas2(): Observable<Factura[]> {
    return this.http.get<Factura[]>(this.facturasUrl);
  }

}