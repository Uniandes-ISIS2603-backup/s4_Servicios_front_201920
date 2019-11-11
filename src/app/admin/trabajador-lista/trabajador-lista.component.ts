import { Component, OnInit } from '@angular/core';
import { Trabajador } from "../trabajador";
import { TrabajadorService } from "../trabajador.service";

@Component({
  selector: 'app-Trabajador-lista',
  templateUrl: './Trabajador-lista.component.html',
  styleUrls: ['./Trabajador-lista.component.css']
})
export class TrabajadorListaComponent implements OnInit {

  trabajadores: Trabajador[];

  constructor(private trabajadorService: TrabajadorService) {
    this.trabajadores = [];
  }


  getTrabajadores(): void {
    this.trabajadorService.getTrabajadores().subscribe(trabajador => (this.trabajadores = trabajador));
  }

  total(): number {
    return this.trabajadores.length;
  }

  ngOnInit() {
    this.getTrabajadores();
  }
}
