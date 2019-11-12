import { Solicitud } from "./solicitud";
import { Calificacion } from "./calificacion";

export class SolicitudDetail extends Solicitud{

estado: string;

foto: string;

fechaInicio: Date;

calificacion: Calificacion;

}