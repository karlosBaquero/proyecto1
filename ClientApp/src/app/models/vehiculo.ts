import { Propietario } from './propietario';
import { Conductor } from './conductor';

export class Vehiculo {
        id:number;
        placa:string;
        marca:string;
        modelo:string;
        fechaAfiliacion:Date;
        propietarioId:number;   
        conductorId:number;
}
