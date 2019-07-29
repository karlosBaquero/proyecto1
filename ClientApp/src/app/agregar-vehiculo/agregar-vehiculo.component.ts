import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../models/vehiculo';
import { VehiculoService } from '../services/vehiculo.service';
import { Propietario } from '../models/propietario';
import { Conductor } from '../models/conductor';
import { Cartera } from '../models/cartera';
import { CarteraService } from '../services/cartera.service';
import {ConductorService} from '../services/conductor.service';
import {Location} from '@angular/common';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-agregar-vehiculo',
  templateUrl: './agregar-vehiculo.component.html',
  styleUrls: ['./agregar-vehiculo.component.css']
})
export class AgregarVehiculoComponent implements OnInit {

  vehiculo: Vehiculo;
  propietario: Propietario;
  cartera: Cartera;
  conductor: Conductor;

  model: NgbDateStruct;
  date: { year: number, month: number };


  constructor(private calendar: NgbCalendar, 
    private vehiculoService: VehiculoService, 
    private carteraService: CarteraService,
    private conductorSertice: ConductorService,
    private _location: Location) { }

  ngOnInit() {

    this.vehiculo = {
      id: 0,
      placa: '',
      marca: '',
      modelo: '',
      fechaAfiliacion: new Date(),
      propietarioId: 0,
      conductorId: 0
    }

    this.cartera = {
      id: 0,
      identificacion: '',
      DeudaActual: 0,
      DeudaInicial: 0,
      FechaUltimoPago: new Date(),
      Estado:'ACTIVA',
      MesesPagados: 0,
      vehiculoId: 0,
      conductorId: 0
    }

  }

  selectToday() {
    this.model = this.calendar.getToday();
  }

  selectConductor(cond: Conductor,modal) {
    this.conductor = cond;
    modal.close();
  }

  selectPropietario(prop: Propietario) {
    this.propietario = prop;
  }

  add() {
   
    let existe: boolean;

    if(this.vehiculo.placa != null && this.vehiculo.marca!=null && this.vehiculo.modelo!=null){
      if(this.cartera.DeudaInicial<=0){
        alert('Ingrese el valor de la deuda inicial');
      }else{
        this.vehiculoService.getAll().subscribe(vehiculos =>{
  
          vehiculos.forEach(element => {
            if(element.placa==this.vehiculo.placa){
              existe = true;
            }        
          });
    
          if(existe==true){
            alert('Vehiculo ya se encuentra registrado');
          }else{
            this.agregarVehiculo();
            return;
          }
    
        });
      }  
    }else{
      alert('Ingrese los datos del Vehiculo');
    }

    
    
  }

  agregarVehiculo(){
    if (this.conductor != null && this.propietario != null) {

      this.vehiculo.fechaAfiliacion = new Date(this.model.year, this.model.month - 1, this.model.day);
      // this.vehiculo.fechaAfiliacion =  new Date(this.model.year,this.model.month-1,this.model.day).toString();
      //this.vehiculo.fechaAfiliacion = this.model.year + '-' + this.model.month + '-' + this.model.day
      this.vehiculo.conductorId = this.conductor.id;
      this.vehiculo.propietarioId = this.propietario.id;


      this.vehiculoService.addVehiculo(this.vehiculo).subscribe(vehiculo =>{
        this.conductor.asignado="Asignado";
        this.conductorSertice.update(this.conductor).subscribe();
        this.crearCartera();
          
      }
      );

    }
  }

  crearCartera() {


    this.cartera.FechaUltimoPago = this.vehiculo.fechaAfiliacion;
    this.cartera.conductorId = this.conductor.id;
    this.cartera.DeudaActual = this.cartera.DeudaInicial;
    this.cartera.identificacion = this.conductor.identificacion;

    this.vehiculoService.getAll().subscribe(vehiculos => {
      this.cartera.vehiculoId = vehiculos[vehiculos.length - 1].id;
      console.log(`${vehiculos[vehiculos.length - 1].id}`);
      this.carteraService.addCartera(this.cartera).subscribe(cartera => this._location.back());
    }
    );

    
  }



}
