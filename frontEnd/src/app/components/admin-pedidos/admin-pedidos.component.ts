import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pedidos } from 'src/app/models/pedido';
import { AuthService } from 'src/app/services/auth.service';
import { DispositivoService } from 'src/app/services/dispositivo.service';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-admin-pedidos',
  templateUrl: './admin-pedidos.component.html',
  styleUrls: ['./admin-pedidos.component.css']
})
export class AdminPedidosComponent implements OnInit {

  constructor(public pedidoService: PedidoService, public dispositivoService: DispositivoService, public authService: AuthService) { }

  ngOnInit(): void {
    this.getPedidos();
    this.getDispositivos();
    this.getUser();
  }
  getDispositivos() {
    this.dispositivoService.getDispositivos().subscribe(
      res => {
        this.dispositivoService.dispositivos = res;
      },
      err => console.error(err)
    );

  }

  getUser() {
    this.authService.getUser().subscribe(
      res => {
        this.authService.user = res;
      },
      err => console.error(err)
    );

  }
 
   getPedidos() {
     this.pedidoService.getPedidos().subscribe(
       res => {
         this.pedidoService.pedido = res;
       },
       err => console.error(err)
     );
 
   }

   updatePedido(form: NgForm){
      this.pedidoService.putPedido(form.value).subscribe(
       res => {
         this.getPedidos();
       },
       err => console.error(err)
     )
    location.reload();
  }

  editDate(pedidos: Pedidos) {
    this.pedidoService.selectedPedido = pedidos;
  }

}