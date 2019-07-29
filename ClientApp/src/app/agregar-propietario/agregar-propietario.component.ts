import { Component, OnInit } from '@angular/core';
import { PropietarioService} from '../services/propietario.service';
import {Propietario} from '../models/propietario'
import {Location} from '@angular/common';

@Component({
  selector: 'app-agregar-propietario',
  templateUrl: './agregar-propietario.component.html',
  styleUrls: ['./agregar-propietario.component.css']
})
export class AgregarPropietarioComponent implements OnInit {

  propietario:Propietario;
  constructor(private propietarioService:PropietarioService,private _location: Location) { }

  ngOnInit() {
    this.propietario= {id:0, identificacion:" ",nombre_Completo:" ",
    primer_Nombre:" ",
    segundo_Nombre:" ",
    primer_Apellido:" ",
    segundo_Apellido:" ",telefono:" "};
  }

  add() {  

    this.propietario.nombre_Completo = 
    this.propietario.primer_Nombre + " " +
    this.propietario.segundo_Nombre + " " +
    this.propietario.primer_Apellido + " " +
    this.propietario.segundo_Apellido;

    let existe: boolean;
  
    this.propietarioService.getAll().subscribe(conductores =>{

      conductores.forEach(element => {
        if(element.identificacion==this.propietario.identificacion){
          existe = true;
        }

        
      });
      if(existe==true){
        alert('Propietario ya se encuentra registrado');
      }else{
        this.propietarioService.addPropietario(this.propietario)
      .subscribe(propietario => {this._location.back() });
      }
    });



   
  }
}
