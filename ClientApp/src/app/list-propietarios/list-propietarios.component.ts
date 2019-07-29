import { Component, OnInit, Input ,Output, EventEmitter} from '@angular/core';
import {Propietario} from '../models/propietario';
import { PropietarioService}from '../services/propietario.service';
import { OpcionesFiltradoComponent } from '../opciones-filtrado/opciones-filtrado.component';

@Component({
  selector: 'app-list-propietarios',
  templateUrl: './list-propietarios.component.html',
  styleUrls: ['./list-propietarios.component.css']
})
export class ListPropietariosComponent implements OnInit {
  @Input() filtrado: OpcionesFiltradoComponent;
  @Input() editable: boolean;
  @Output() seleccionProp = new EventEmitter();
  propietarios:Propietario[];

  constructor(private propietarioService:PropietarioService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.propietarioService.getAll().subscribe(Propietarios=>{this.propietarios=Propietarios; });
  } 

  delete(propietario: Propietario) {

    var r = confirm(`Desea eliminar al propietario: ${propietario.nombre_Completo}` );

    if(r==true){
      this.propietarioService.delete(propietario.id).subscribe(propietario => {
        this.getAll();
      });
    }
    
  }
  select(propietario:Propietario){
    this.seleccionProp.emit(propietario);
  }
}
