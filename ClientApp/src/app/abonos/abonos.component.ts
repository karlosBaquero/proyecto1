import { Component, OnInit } from '@angular/core';
import { AbonoService } from '../services/abono.service';
import { Abono } from '../models/Abono';

@Component({
  selector: 'app-Abonos',
  templateUrl: './Abonos.component.html',
  styleUrls: ['./Abonos.component.css']
})
export class AbonosComponent implements OnInit {

  total:number;
  abonos:Abono[];
  abono:Abono;
  iden:number;
  constructor(private AbonoService:AbonoService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.AbonoService.getAll().subscribe(Abonos=>{this.abonos=Abonos;this.getTotal();});
  }
  add() {
    
    this.AbonoService.addAbono(this.abono)
    .subscribe(Abono => {
    this.getAll(); 
    });
  }

  getTotal(){

    this.total=0;
    this.abonos.forEach(element => {
      this.total = this.total + element.valor;
    });
  }



}
