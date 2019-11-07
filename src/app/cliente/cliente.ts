export class Cliente {
  id : number;
  nombre : string;
  telefono : number;
  mail : string;
  usuario : string;
  contrasena : string;
  direccion : string;
  constructor(pId: number, pNombre: string, pTelefono: number){
    this.id = pId;
    this.nombre = pNombre;
    this.telefono = pTelefono;
  }
}