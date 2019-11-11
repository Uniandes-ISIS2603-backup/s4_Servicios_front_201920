import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Admin } from "./admin";
import { AdminDetail } from "./admin-detail";
import { Observable } from "rxjs";

const API_URL = "environments.apiURL";
const admins = "/trabajadores";

@Injectable()
export class AdminService {

  constructor(private http: HttpClient) { }

  getAdmins(): Observable<Admin[]> {
    return this.http.get<Admin[]>(API_URL + admins);
  }

  getAdminDetail(adminId): Observable<AdminDetail> {
    return this.http.get<AdminDetail>(API_URL + "admin" + adminId + ".json"
    );
  }
}
