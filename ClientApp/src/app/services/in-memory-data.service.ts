import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Conductor} from '../models/conductor';
import { Vehiculo} from '../models/vehiculo';
import { Abono} from '../models/abono';
import { Cartera} from '../models/cartera';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
  const Conductor = [
  { id: 11, Identificacion:"100123", Nombre:"carlos", NumLicencia:"123124", Telefono:"3006124234", FechaAfiliacion:"23/12/2010"},
  { id: 12, Identificacion:"161234", Nombre:"dario", NumLicencia:"162346", Telefono:"3503448234", FechaAfiliacion:"23/12/2010"},
  { id: 13, Identificacion:"123613", Nombre:"andres", NumLicencia:"167953", Telefono:"3002458264", FechaAfiliacion:"23/12/2010"},
  { id: 14, Identificacion:"512366", Nombre:"juan", NumLicencia:"112355", Telefono:"3032258274", FechaAfiliacion:"23/12/2010"},
  ];
  return {Conductor};
  }
  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(conductores: Conductor[]): number {
  return conductores.length > 0 ? Math.max(...conductores.map(conductor => conductor.id)) + 1 : 11;
}
}