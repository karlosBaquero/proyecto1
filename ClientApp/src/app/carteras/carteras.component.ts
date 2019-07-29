import { Component, OnInit } from '@angular/core';
import { CarteraService } from '../services/cartera.service';
import { Cartera } from '../models/cartera';

@Component({
  selector: 'app-Carteras',
  templateUrl: './Carteras.component.html',
  styleUrls: ['./Carteras.component.css']
})
export class CarterasComponent implements OnInit {

  totalIni:number;
  totalAct:number;
  carteras:Cartera[];
  constructor(private carteraService:CarteraService) { }

  ngOnInit() {
    this.getAll();
    
  }


  getAll(){
    this.carteraService.getAll().subscribe(Carteras=>{this.carteras=Carteras;this.getTotal();});
  }


  getTotal(){
    this.totalAct=0;
    this.totalIni=0;
    this.carteras.forEach(element => {
      this.totalIni = this.totalIni + element.DeudaInicial;
      this.totalAct = this.totalAct + element.DeudaActual;
    });
  }

}
