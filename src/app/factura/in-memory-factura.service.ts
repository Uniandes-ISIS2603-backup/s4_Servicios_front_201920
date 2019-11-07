import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryFacturaService implements InMemoryDbService{

  createDb() {
    let facturas = [
      {
        id: 1,
        duracion: 20
      },
      {
        id: 2,
        duracion: 30
      },
      {
        id: 3,
        duracion: 30
      },
      {
        id: 4,
        duracion: 40
      }
    ];
    return { facturas };
  }

}