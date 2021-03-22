import { Component, OnInit } from '@angular/core';
import {PruebaService} from '../../services/prueba.service';
import {Prueba} from '../../models/prueba'

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

  constructor(public pruebaService:PruebaService) { }

  ngOnInit(): void {
    this.getPruebas()
  }

  getPruebas() {
    this.pruebaService.getPrueba().subscribe(
      res => {
        this.pruebaService.prueba = res;
      },
      err => console.error(err)
    );

  }


}