// Falta importar la clase servicio y la clase tarjeta
import {Cliente} from './cliente';
import { Solicitud } from '../solicitud/solicitud';

export class ClienteDetail extends Cliente {
  solicitudes : Solicitud[];
  tarjeta : string;
}