import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";

import { TrabajadorService } from "../trabajador.service";
import { Trabajador } from "../trabajador";
import { TrabajadorDetail } from "../trabajador-detail";

@Component({
  selector: 'app-trabajador-detail',
  templateUrl: './trabajador-detail.component.html',
  styleUrls: ['./trabajador-detail.component.css']
})
export class TrabajadorDetailComponent implements OnInit {
  constructor(
    private trabajadorService: TrabajadorService,
    private route: ActivatedRoute
  ) {}

  trabajadorDetail: TrabajadorDetail;

  @Input() user: String;

  @Input() password: String;

  loader: any;

  getTrabajadorDetail(): void {
    this.trabajadorService.getTrabajadorDetail(this.user, this.password).subscribe(o => {
      this.trabajadorDetail = o;
    });
  }

  onLoad(params) {
    this.user = params['user'];
    this.password = params['password'];
    this.trabajadorDetail = new TrabajadorDetail();
    this.getTrabajadorDetail();
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
