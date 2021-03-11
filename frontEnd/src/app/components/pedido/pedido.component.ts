import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../services/pedido.service';
import { NgForm } from '@angular/forms';
import { Pedidos } from '../../models/pedido'




@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  constructor(public pedidoService: PedidoService){}
  ngOnInit(): void {
    this.getPedidos();
  }

  addPedido(form: NgForm) {
  
     this.pedidoService.createPedido(form.value).subscribe(
       res => {
         this.getPedidos();
       },
       err => console.error(err)
     )
    
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
