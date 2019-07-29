import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../models/vehiculo';
import { VehiculoService } from '../services/vehiculo.service';
import { Propietario } from '../models/propietario';
import { PropietarioService } from '../services/propietario.service';
import { Conductor } from '../models/conductor';
import { Cartera } from '../models/cartera';
import { CarteraService } from '../services/cartera.service';
import { Location } from '@angular/common';
import { NgbDateStruct, NgbCalendar,NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { ConductorService } from '../services/conductor.service';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';

@Component({
  selector: 'app-vehiculo-detail',
  templateUrl: './vehiculo-detail.component.html',
  styleUrls: ['./vehiculo-detail.component.css']
})
export class VehiculoDetailComponent implements OnInit {

  vehiculo: Vehiculo;
  propietario: Propietario;
  cartera: Cartera;
  conductor: Conductor;

  model: NgbDateStruct;
  calendario:NgbDatepicker;
  date: { year: number, month: number };


  constructor(private route: ActivatedRoute,
    private calendar: NgbCalendar,
    private conductorService: ConductorService,
    private propietarioService: PropietarioService,
    private vehiculoService: VehiculoService,
    private carteraService: CarteraService,
    private _location: Location) { }

  ngOnInit() {
    this.selectToday();
    this.getVehiculo();  
    
  }

  getVehiculo(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.vehiculoService.getVehiculo(id)
      .subscribe(vehiculo => { this.vehiculo = vehiculo;
         this.getConductor();
         this.getCartera(); 
         this.getPropietario();        
        });
  }

  getPropietario(){
    this.propietarioService.getPropietario(this.vehiculo.propietarioId).subscribe(prop => this.propietario=prop);
  }

  getConductor() {
    this.conductorService.getConductor(this.vehiculo.conductorId).subscribe(conductor => { this.conductor = conductor });
  }

  getCartera() {
    this.carteraService.getAll().subscribe(carteras => {
      carteras.forEach(element => {
        if (element.vehiculoId == this.vehiculo.id)
          this.cartera = element;
      });
    }
    )
  }

  selectToday() {
    this.model = this.calendar.getToday();
  }

  selectConductor(cond: Conductor) {
    this.conductor = cond;
  }

  selectPropietario(prop: Propietario) {
    this.propietario = prop;
  }

  add() {
    if (this.conductor != null && this.propietario != null) {

      this.vehiculo.fechaAfiliacion = new Date(this.model.year, this.model.month - 1, this.model.day);
      // this.vehiculo.fechaAfiliacion =  new Date(this.model.year,this.model.month-1,this.model.day).toString();
      //this.vehiculo.fechaAfiliacion = this.model.year + '-' + this.model.month + '-' + this.model.day
      this.vehiculo.conductorId = this.conductor.id;
      this.vehiculo.propietarioId = this.propietario.id;


      this.vehiculoService.update(this.vehiculo).subscribe(vehiculo => {
        this.modificarCartera(); this.conductor.asignado = "Asignado";this._location.back();
      }
      );

    }
  }

  modificarCartera() {   
    this.cartera.conductorId = this.conductor.id;
    this.cartera.identificacion = this.conductor.identificacion;
  }

  
  Eliminar() {

    var r = confirm(`¿Desea eliminar este vehiculo?` );

    if(r==true){
      this.vehiculoService.delete(this.vehiculo).subscribe(propietario => {
        this._location.back();
      });
    }
    
  }

}
