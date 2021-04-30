import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../services/pedido.service';
import { DispositivoService } from '../../services/dispositivo.service';
import {ClientesService} from '../../services/clientes.service'


import { NgForm } from '@angular/forms';
import { Pedidos } from '../../models/pedido'






@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  constructor(public pedidoService: PedidoService, public dispositivoService: DispositivoService, public clienteService: ClientesService){}
  ngOnInit(): void {
    this.getPedidos();
    this.getDispositivos();
    this.getClientes();
  }

  addPedido(form: NgForm ) {
    var x = (<HTMLInputElement>document.getElementById("modelo")).value;
  
     this.pedidoService.createPedido(form.value,x).subscribe(
       res => {
         this.getPedidos();
       },
       err => console.error(err)
     )
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

  getClientes() {
    this.clienteService.getClientes().subscribe(
      res => {
        this.clienteService.clientes = res;
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

 
   deletePedido(id: string) {
     if (confirm('¿estas seguro de que lo quieres eliminar?')) {
       this.pedidoService.deletePedido(id).subscribe(
         (res) => {
           this.getPedidos();
         },
         (err) => console.error(err)
       );
     }
 
   }

 
 
}