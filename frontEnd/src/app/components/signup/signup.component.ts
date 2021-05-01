import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { HistorialService } from '../../services/historial.service';
import {User} from '../../models/user';
import { Historial } from '../../models/historial';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user = {
    nombre:'',
    email: '',
    password: ''
  }
  constructor(
    private authService: AuthService,
    private router: Router, public historialService : HistorialService
    ) { }

  ngOnInit(): void {
  }

  signUp(){
    this.authService.signUp(this.user)
    .subscribe(
      res => {
        console.log(res)
        localStorage.setItem('token', res.token);
        this.router.navigate(['/catalogoAdmin'])
      },
      err => console.log(err)
    )
    //Guardar en el historial 
    const historia:Historial ={
   
      user: localStorage.getItem("nombre"),
      accion:"Inserto Administrador",
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
