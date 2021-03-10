import { Component, OnInit } from '@angular/core';
import { DispositivoService } from '../../services/dispositivo.service';
import { NgForm } from '@angular/forms';
import { Dispositivo } from '../../models/dispositivos'

@Component({
  selector: 'app-dispositivos',
  templateUrl: './dispositivos.component.html',
  styleUrls: ['./dispositivos.component.css']
  
})
export class DispositivosComponent implements OnInit {


  constructor(public dispositivoService: DispositivoService) { }

  ngOnInit(): void {
    this.getDispositivos();
  }

  addDispositivo(form: NgForm) {
   if(form.value._id){
     this.dispositivoService.putDispositivo(form.value).subscribe(
      res => {
        this.getDispositivos();
      },
      err => console.error(err)
    )
   }else{
    this.dispositivoService.createDispositivo(form.value).subscribe(
      res => {
        this.getDispositivos();
      },
      err => console.error(err)
    )
   }
  }
  



  getDispositivos() {
    this.dispositivoService.getDispositivos().subscribe(
      res => {
        this.dispositivoService.dispositivos = res;
      },
      err => console.error(err)
    );

  }


  editDipositivo(dispositivo: Dispositivo) {
    this.dispositivoService.selectedDispositivo = dispositivo;
  }

  deleteDispositivo(id: string) {
    if (confirm('¿estas seguro de que lo quieres eliminar?')) {
      this.dispositivoService.deleteDispositivo(id).subscribe(
        (res) => {
          this.getDispositivos();
        },
        (err) => console.error(err)
      );
    }

  }


}