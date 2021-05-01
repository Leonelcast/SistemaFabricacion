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
    this.getSeries();
  }

  
  getSeries() {
    this.serieS.getSeries().subscribe(
      res => {
        this.serieS.series = res;
      },
      err => console.error(err)
    );

  }


  updateSerie(form: NgForm){
    if(form.value._id){
      this.serieS.putSeries(form.value).subscribe(
       res => {
         this.getSeries();
       },
       err => console.error(err)
     )
    }
    location.reload();
  }

    editSerie(serie: Serie) {
      this.serieS.selectedSerie = serie;
    }

}
