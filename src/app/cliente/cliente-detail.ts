// Falta importar la clase servicio y la clase tarjeta
import {Cliente} from './cliente';
import { SolicitudDetail } from './solicitud-detail';

export class ClienteDetail extends Cliente {
  servicios : SolicitudDetail[];
  tarjeta : string;
}