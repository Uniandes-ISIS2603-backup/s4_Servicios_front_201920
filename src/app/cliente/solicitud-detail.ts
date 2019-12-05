import { Solicitud } from "./solicitud";
import { Calificacion } from "./calificacion";
import { Cliente } from "./cliente";

export class SolicitudDetail extends Solicitud{

estado: string;

foto: string;

fechaInicio: String;

calificacion: Calificacion;

cliente:Cliente;
}