import { Component, OnInit } from '@angular/core';
import { HistorialService } from 'src/app/services/historial.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  constructor(public historialService: HistorialService) { }

  ngOnInit(): void {
    this.getHistorial();
  }

  getHistorial() {
    this.historialService.getHistorial().subscribe(
      res => {
        this.historialService.historia = res;
      },
      err => console.error(err)
    );

  }

  addHistorial(form: NgForm) {
   
    this.historialService.createHistorial(form.value).subscribe(
      res => {
        this.getHistorial();
      },
      err => console.error(err)
    )
    location.reload();
  }



}
