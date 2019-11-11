import { Component, OnInit} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FacturaService } from '../factura.service';
import { Factura } from '../factura';

@Component({
  selector: 'app-factura-create',
  templateUrl: './factura-create.component.html',
  styleUrls: ['./factura-create.component.css']
})
export class FacturaCreateComponent implements OnInit{

  facturaForm: FormGroup;
  facturas: Factura[];

 constructor(
    private facturaService: FacturaService,
    private formBuilder: FormBuilder
  ) {
    this.facturaForm = this.formBuilder.group({
      id: ["", [Validators.required, Validators.minLength(2)]],
      duracion: ["", Validators.required]
    });
  }

  createFactura():void{

  }

  getFacturas(): void {
  this.facturaService.getFacturas2().subscribe(facturas => this.facturas = facturas);
 }

  ngOnInit() {
    this.getFacturas();
  }
}