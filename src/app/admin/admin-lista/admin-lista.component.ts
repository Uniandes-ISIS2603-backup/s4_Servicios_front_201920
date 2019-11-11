import { Component, OnInit } from '@angular/core';
import { Admin } from "../admin";
import { AdminService } from "../admin.service";

@Component({
  selector: 'app-admin-lista',
  templateUrl: './admin-lista.component.html',
  styleUrls: ['./admin-lista.component.css']
})
export class AdminListaComponent implements OnInit {

  admins: Admin[];

  constructor(private adminService: AdminService) {
    this.admins = [];
  }


  getAdmins(): void {
    this.adminService.getAdmins().subscribe(admin => (this.admins = admin));
  }

  total(): number {
    return this.admins.length;
  }

  ngOnInit() {
    this.getAdmins();
  }
}
