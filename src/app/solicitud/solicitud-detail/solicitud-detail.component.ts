import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { SolicitudService } from '../solicitud.service';
import { SolicitudDetail } from '../solicitud-detail';
import { Solicitud } from '../solicitud';


@Component({
  selector: 'app-solicitud-detail',
  templateUrl: './solicitud-detail.component.html',
  styleUrls: ['./solicitud-detail.component.css']
})
export class SolicitudDetailComponent implements OnInit {

  constructor(
    private solicitudService: SolicitudService,
    private route: ActivatedRoute
  ) { }

solicitudDetail: SolicitudDetail; 

@Input() solicitud_id: number;

loader: any;

getSolicitudDetail(): void{
  this.solicitudService.getSolicitudDetail(this.solicitud_id)
  .subscribe( o => {
     this.solicitudDetail = o
  });
}

onLoad(params) {

    this.solicitud_id = parseInt(params['id']);
    console.log(" en detail " + this.solicitud_id);
    this.solicitudDetail = new SolicitudDetail();
    this.getSolicitudDetail();
  }

  ngOnInit() {
   this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
  }

  ngOnDestroy() {
    this.loader.unsubscribe();
  }

}