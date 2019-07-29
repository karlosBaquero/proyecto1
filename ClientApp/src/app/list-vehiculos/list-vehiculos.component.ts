import { Component, OnInit, Input } from '@angular/core';
import { VehiculoService } from '../services/vehiculo.service';
import { Vehiculo } from '../models/vehiculo';
import { OpcionesFiltradoComponent } from '../opciones-filtrado/opciones-filtrado.component';

@Component({
  selector: 'app-list-vehiculos',
  templateUrl: './list-vehiculos.component.html',
  styleUrls: ['./list-vehiculos.component.css']
})
export class ListVehiculosComponent implements OnInit {
  @Input() filtrado: OpcionesFiltradoComponent;
  vehiculos:Vehiculo[];

  constructor(private vehiculoService : VehiculoService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.vehiculoService.getAll().subscribe(vehiculos => this.vehiculos = vehiculos);
  }

  delete(vehiculo: Vehiculo) {
    this.vehiculoService.delete(vehiculo.id).subscribe(conductor => {
      this.getAll();
    });
  }

}
