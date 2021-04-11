import { Component, OnInit } from '@angular/core';
import { DispositivoService } from '../../services/dispositivo.service';
import { HistorialService } from '../../services/historial.service';
import { NgForm } from '@angular/forms';
import { Dispositivo } from '../../models/dispositivos';
import { Historial } from '../../models/historial';


@Component({
  selector: 'app-dispositivos',
  templateUrl: './dispositivos.component.html',
  styleUrls: ['./dispositivos.component.css']

})
export class DispositivosComponent implements OnInit {


  constructor(public dispositivoService: DispositivoService , public historialService : HistorialService) { }
  

  ngOnInit(): void {
    this.getDispositivos();
  }

  addDispositivo(form: NgForm) {
   
    this.dispositivoService.createDispositivo(form.value).subscribe(
      res => {
        this.getDispositivos();
      },
      err => console.error(err)
    )
    location.reload();
    


  }
  
  
updateDispositivo(form: NgForm){
  if(form.value._id){
    this.dispositivoService.putDispositivo(form.value).subscribe(
     res => {
       this.getDispositivos();
     },
     err => console.error(err)
   )
  }

 //Guardar en el historial 
  const historia:Historial ={
   
    user: localStorage.getItem("nombre"),
    accion:"Actualizo el dispostivo",
    fecha: new Date()

  }; 

  this.historialService.createHistorial(historia).subscribe(
      res => {
        this.getHistorial();
      },
      err => console.error(err)
    ); 
  location.reload();
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


  getHistorial() {
    this.historialService.getHistorial().subscribe(
      res => {
        this.historialService.historia = res;
      },
      err => console.error(err)
    );

  }


}