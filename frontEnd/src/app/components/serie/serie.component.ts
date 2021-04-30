import { Component, OnInit } from '@angular/core';
import { SerieService } from '../../services/serie.service';
import { NgForm } from '@angular/forms';
import { Serie } from '../../models/serie'


@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  constructor(public serieS:SerieService) { }
  filterpost = '';
  ngOnInit(): void {
    this.getClientes();
  }

  
  getClientes() {
    this.serieS.getSeries().subscribe(
      res => {
        this.serieS.series = res;
      },
      err => console.error(err)
    );

  }

}
