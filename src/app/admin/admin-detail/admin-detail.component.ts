import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";

import { AdminService } from "../admin.service";
import { Admin } from "../admin";
import { AdminDetail } from "../admin-detail";

@Component({
  selector: 'app-admin-detail',
  templateUrl: './admin-detail.component.html',
  styleUrls: ['./admin-detail.component.css']
})
export class AdminDetailComponent implements OnInit {
  constructor(
    private adminService: AdminService,
    private route: ActivatedRoute
  ) {}

  adminDetail: AdminDetail;

  @Input() admin_id: number;

  loader: any;

  getAdminDetail(): void {
    this.adminService.getAdminDetail(this.admin_id).subscribe(o => {
      this.adminDetail = o;
    });
  }

  onLoad(params) {
    this.admin_id = parseInt(params["id"]);
    this.adminDetail = new AdminDetail();
    this.getAdminDetail();
  }

  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) =>
      this.onLoad(params)
    );
  }

  ngOnDestroy() {
    this.loader.unsubscribe();
  }
}
