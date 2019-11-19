import {Trabajador} from "./trabajador";
import { ServicioOfrecido } from "../servicio-ofrecido/servicio-ofrecido";
import { Solicitud } from "../solicitud/solicitud";

export class TrabajadorDetail extends Trabajador{
  servicios: ServicioOfrecido[];
  solicitudes: Solicitud[];
}