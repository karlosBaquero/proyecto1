import { Component, OnInit,Input } from '@angular/core';
import { CarteraService } from '../services/cartera.service';
import { Cartera } from '../models/cartera';
import { OpcionesFiltradoComponent } from '../opciones-filtrado/opciones-filtrado.component';
@Component({
  selector: 'app-lista-carteras',
  templateUrl: './lista-carteras.component.html',
  styleUrls: ['./lista-carteras.component.css']
})
export class ListaCarterasComponent implements OnInit {
  carteras:Cartera[];
  @Input() filtrado: OpcionesFiltradoComponent;

  constructor(private CarteraService:CarteraService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.CarteraService.getAll().subscribe(Carteras=>this.carteras=Carteras);
  }
}
