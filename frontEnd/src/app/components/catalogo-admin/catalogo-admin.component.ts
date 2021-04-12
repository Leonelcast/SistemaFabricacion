import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user';
import { HistorialService } from '../../services/historial.service';
import { Historial } from '../../models/historial';

@Component({
  selector: 'app-catalogo-admin',
  templateUrl: './catalogo-admin.component.html',
  styleUrls: ['./catalogo-admin.component.css']
})
export class CatalogoAdminComponent implements OnInit {

  constructor(public authService: AuthService, public historialService : HistorialService) { }

  ngOnInit(): void {
    this.getUser();
  }
  getUser() {
    this.authService.getUser().subscribe(
      res =>{
        this.authService.user = res;
      },
      err => console.error(err)
    );
  }

  updateUser(form: NgForm){
    if(form.value._id){
      this.authService.putUser(form.value).subscribe(
       res => {
         this.getUser();
       },
       err => console.error(err)
     )
    }
     //Guardar en el historial 
     const historia:Historial ={
   
      user: localStorage.getItem("nombre"),
      accion:"Actualizo Administrador",
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

  editUser(user: User) {
    this.authService.selectedUser = user;
  }
  deleteUser(id: string) {
    if (confirm('¿estas seguro de que lo quieres eliminar?')) {
      this.authService.deleteUser(id).subscribe(
        (res) => {
          this.getUser();
        },
        (err) => console.error(err)
      );
    }

     //Guardar en el historial 
     const historia:Historial ={
   
      user: localStorage.getItem("nombre"),
      accion:"Elimino Administrador",
      fecha: new Date()
  
     }; 
  
      this.historialService.createHistorial(historia).subscribe(
          res => {
            this.getHistorial();
          },
          err => console.error(err)
        ); 

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