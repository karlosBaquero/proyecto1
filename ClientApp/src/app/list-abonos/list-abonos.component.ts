import { Component, OnInit , Input} from '@angular/core';
import { AbonoService } from '../services/abono.service';
import { Abono } from '../models/Abono';

@Component({
  selector: 'app-list-abonos',
  templateUrl: './list-abonos.component.html',
  styleUrls: ['./list-abonos.component.css']
})
export class ListAbonosComponent implements OnInit {
  abonos:Abono[];
  result:Abono[];
  @Input() identificacion: number;
  constructor(private AbonoService:AbonoService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.AbonoService.getAll().subscribe(Abonos=>{this.abonos=Abonos;
      if(this.identificacion!=null){
        this.getAbonos();
      }
    }); 
  }

  getAbonos(){
    this.result=[];
    this.abonos.forEach(element => {
      if(element.carteraId == this.identificacion){
        this.result.push(element);
      }
    });
    this.abonos = this.result;
  }

  Eliminar(abono:Abono){

    var r = confirm(`¿Desea eliminar el abono?` );
    if(r==true){
        this.AbonoService.delete(abono).subscribe();
    }

  }
}
