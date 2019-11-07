import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemorySolicitudService implements InMemoryDbService {
  createDb() {
    let solicitudes = [
      {
        id: 1,
        description: "Arreglo de tuberia"
      },
      {
        id: 2,
        description: "Aseo general"
      },
      {
        id: 3,
        description: "Mudanza"
      },
      {
        id: 4,
        description: "Pintar la casita"
      }
    ];
    return { solicitudes };
  }
}