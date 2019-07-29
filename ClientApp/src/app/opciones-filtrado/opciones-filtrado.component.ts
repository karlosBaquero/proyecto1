import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opciones-filtrado',
  templateUrl: './opciones-filtrado.component.html',
  styleUrls: ['./opciones-filtrado.component.css']
})
export class OpcionesFiltradoComponent implements OnInit {

  filterWord:"";
  constructor() { }

  ngOnInit() {
    this.filterWord="";
  }

}
