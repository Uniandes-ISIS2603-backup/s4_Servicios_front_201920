import { Component, OnInit} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FacturaService } from '../factura.service';
import { Factura } from '../factura';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';
import {FacturaDetail} from '../factura-detail';

@Component({
  selector: 'app-factura-create',
  templateUrl: './factura-create.component.html',
  styleUrls: ['./factura-create.component.css']
})
export class FacturaCreateComponent implements OnInit{

 constructor(
    private facturaService: FacturaService,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  factura : FacturaDetail;

  cancelCreation(): void {
    this.toastrService.warning('The factura wasn\'t created', 'Factura creation');
    this.router.navigate(['/facturas/list']);
  }

  createFactura():FacturaDetail{
    this.facturaService.createFactura(this.factura)
    .subscribe(serv => {
        this.factura.id = serv.id;
        this.router.navigate(['/factura/' + serv.id]);
    }, err => {
        this.toastrService.error(err, 'Error');
    });
    return this.factura;
  }
  
  ngOnInit() {
    this.factura = new FacturaDetail();
  }
}