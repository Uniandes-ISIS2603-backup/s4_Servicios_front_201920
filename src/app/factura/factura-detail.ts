import {Factura} from './factura';

export class FacturaDetail extends Factura{

    fecha: Date;

    pagada: boolean;

    primerPago: boolean;
    
    duracion: number;
}