import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';
import { ConductorService } from '../services/conductor.service';
import { Conductor } from '../models/conductor';
import { OpcionesFiltradoComponent } from '../opciones-filtrado/opciones-filtrado.component';
import { log } from 'util';

@Component({
  selector: 'app-list-conductores',
  templateUrl: './list-conductores.component.html',
  styleUrls: ['./list-conductores.component.css']
})
export class ListConductoresComponent implements OnInit {

  @Input() filtrado: OpcionesFiltradoComponent;
  @Input() editable: boolean;
  @Output() seleccion = new EventEmitter();
  conductores: Conductor[];
  constructor(private conductorService: ConductorService) { }

  ngOnInit() {
    this.getAll();
    
  }

  filtrar(){
    let conds: Conductor[];
    conds = [];
    this.conductores.forEach(element => {
      if(element.asignado!="Asignado"){
        conds.push(element);
      }
    });
    this.conductores = conds;
  }
  getAll() {
    this.conductorService.getAll().subscribe(conductores =>{      
    
      this.conductores = conductores;
      if(this.editable == false){
        log("!editable");
        this.filtrar();
      }
    });
  }

  
  Eliminar(conductor: Conductor) {

    var r = confirm(`Desea eliminar al propietario: ${conductor.nombre_Completo}` );

    if(r==true){
      this.conductorService.delete(conductor.id).subscribe(conductor => {
        this.getAll();
      });
    }   
  }

  select(conductor:Conductor){
    this.seleccion.emit(conductor);
  }

}

