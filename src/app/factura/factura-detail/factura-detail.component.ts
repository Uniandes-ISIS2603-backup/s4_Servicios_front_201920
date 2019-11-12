import { Component, OnInit, Input } from '@angular/core';
import { FacturaService } from '../factura.service';
import { FacturaDetail } from '../factura-detail';
import { ActivatedRoute, Params } from '@angular/router';
import { Factura } from '../factura';

@Component({
  selector: 'app-factura-detail',
  templateUrl: './factura-detail.component.html',
  styleUrls: ['./factura-detail.component.css']
})
export class FacturaDetailComponent implements OnInit {

  constructor(private facturaService: FacturaService,
    private route: ActivatedRoute) { 
  }

  facturaDetail: FacturaDetail;

  @Input() factura_id: number;

  loader: any;

  getFacturaDetail(): void{
    this.facturaService.getFacturaDetail(this.factura_id)
      .subscribe(o => {
        this.facturaDetail = o
      });
  }

  onLoad(params) {

    this.factura_id = parseInt(params['id']);
    //this.facturaDetail = new FacturaDetail();
    this.getFacturaDetail();

  }

  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
  }

  ngOnDestroy() {
    this.loader.unsubscribe();
  }

  primerPago():string{
    if(this.facturaDetail.primerPago == false){
      return 'No';
    }
    else{
      return 'Si';
    }
  }

  pagada():string{
    if(this.facturaDetail.pagada == false){
      return 'No';
    }
    else{
      return 'Si';
    }
  }

}