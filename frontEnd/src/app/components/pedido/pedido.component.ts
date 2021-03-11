import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
import { DispositivoService } from '../../services/dispositivo.service';
import { NgForm } from '@angular/forms';
import { Dispositivo } from '../../models/dispositivos'




@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  constructor(public authService: AuthService, public dispositivoService: DispositivoService) { }

  

  ngOnInit(): void {
   
  }
  getUser() {
    this.authService.getUser().subscribe(
      res =>{
        this.authService.user = res;
      },
      err => console.error(err)
    );
  }

  
  getDispositivos() {
    this.dispositivoService.getDispositivos().subscribe(
      res => {
        this.dispositivoService.dispositivos = res;
      },
      err => console.error(err)
    );

  }

  nPedido(from:NgForm){
   
  }
}
