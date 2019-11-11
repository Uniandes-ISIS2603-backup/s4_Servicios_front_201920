import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Admin } from "./admin";
import { AdminDetail } from "./admin-detail";
import { Observable } from "rxjs";
import { environment } from '../../environments/environment';


const API_URL = environment.apiURL;
const admins = "/trabajadores";

@Injectable()
export class AdminService {

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };
  
  constructor(private http: HttpClient) { }

  getAdmins(): Observable<Admin[]> {
    return this.http.get<Admin[]>(API_URL + admins);
  }

  getAdminDetail(adminId): Observable<AdminDetail> {
    return this.http.get<AdminDetail>(API_URL + "admin" + adminId + ".json"
    );
  }
}
