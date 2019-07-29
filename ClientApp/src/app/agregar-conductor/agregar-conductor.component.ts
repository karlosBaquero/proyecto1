import { Component, OnInit } from '@angular/core';
import { Conductor } from '../models/conductor';
import { ConductorService} from '../services/conductor.service';
import {Location} from '@angular/common';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-agregar-conductor',
  templateUrl: './agregar-conductor.component.html',
  styleUrls: ['./agregar-conductor.component.css']
})
export class AgregarConductorComponent implements OnInit {

  constructor(private conductorService:ConductorService,private _location: Location) { }

  conductor:Conductor;
  ngOnInit() {
    this.conductor = {id:0, identificacion:" ",
    nombre_Completo:" ",
    primer_Nombre:" ",
    segundo_Nombre:" ",
    primer_Apellido:" ",
    segundo_Apellido:" ",numLicencia:" ",telefono:" ",asignado:"No Asignado"};

  }

  add() {  
    this.conductor.nombre_Completo = 
    this.conductor.primer_Nombre + " " +
    this.conductor.segundo_Nombre + " " +
    this.conductor.primer_Apellido + " " +
    this.conductor.segundo_Apellido;

    let existe: boolean;
  
    this.conductorService.getAll().subscribe(conductores =>{

      conductores.forEach(element => {
        if(element.identificacion==this.conductor.identificacion){
          existe = true;
        }

       
      });
      if(existe==true){
        alert('Conductor ya se encuentra registrado');
      }else{
        this.conductorService.addConductor(this.conductor)
        .subscribe(conductor => {this._location.back() });
        
      }
    });

   
    
  }

}
