import { Abono } from "./abono";
import { Vehiculo } from './vehiculo';

export class Cartera {
    id:number;
    identificacion:string;
    DeudaActual:number;
    DeudaInicial:number;
    FechaUltimoPago:Date;
    MesesPagados:number;
    Estado:string;
    vehiculoId:number;
    conductorId:number;
}
