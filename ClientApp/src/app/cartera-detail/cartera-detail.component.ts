import { Component, OnInit,Input } from '@angular/core';
import { Cartera } from '../models/cartera';
import { ActivatedRoute } from '@angular/router';
import { CarteraService } from '../services/cartera.service';
import {Abono} from '../models/abono';
import {AbonoService} from '../services/abono.service';
import {ConductorService} from '../services/conductor.service';
import {VehiculoService} from '../services/vehiculo.service';
import { Conductor } from '../models/conductor';
import { Vehiculo } from '../models/vehiculo';
import { Location } from '@angular/common';
@Component({
  selector: 'app-cartera-detail',
  templateUrl: './cartera-detail.component.html',
  styleUrls: ['./cartera-detail.component.css']
})
export class CarteraDetailComponent implements OnInit {
  cartera:Cartera;
  abono:Abono;
  conductor:Conductor;
  vehiculo:Vehiculo;

  constructor(private route: ActivatedRoute,
    private CarteraService:CarteraService,
    private AbonoService:AbonoService,
    private conductorService:ConductorService,
    private vehiculoService:VehiculoService,
    private _location: Location) { }

  ngOnInit() {
    this.abono={id:0,
      carteraId:null,
      fecha:new Date(),
      valor:0};
    this.getCartera();
    
  }

  getCartera(): void {
   const id = +this.route.snapshot.paramMap.get('id');
    this.CarteraService.getCartera(id)
      .subscribe(cartera => {this.cartera = cartera; this.getConductor();this.getVehiculo();});
  }

  getConductor(){
    this.conductorService.getConductor(this.cartera.conductorId).subscribe(conductor=>{this.conductor=conductor});
  }

  getVehiculo(){
    this.vehiculoService.getVehiculo(this.cartera.vehiculoId).subscribe(vehiculo=>{this.vehiculo=vehiculo});
  }
  
  addAbono(){

    if(this.cartera.Estado=="PENDIENTE"){
      if(this.abono.valor>0){
        this.abono.carteraId=this.cartera.id;
        this.AbonoService.addAbono(this.abono).subscribe(abono =>window.location.reload());
      }else{
        alert('Ingrese el valor del abono');
      }
    }else{
      alert('No se puede abonar a esta cartera')
    }
      
  }

  deleteCartera(){

    var r = confirm(`¿Desea eliminar esta cartera?` );

    if(r==true){
      this.CarteraService.delete(this.cartera).subscribe(propietario => {
        this._location.back();
      });
    }
    
  
  }
}
