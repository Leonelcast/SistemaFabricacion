import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pedidos } from 'src/app/models/pedido';
import {ClientesService} from '../../services/clientes.service'
import { DispositivoService } from 'src/app/services/dispositivo.service';
import { PedidoService } from 'src/app/services/pedido.service';
import { HistorialService } from '../../services/historial.service';
import { Historial } from '../../models/historial';
@Component({
  selector: 'app-admin-pedidos',
  templateUrl: './admin-pedidos.component.html',
  styleUrls: ['./admin-pedidos.component.css']
})
export class AdminPedidosComponent implements OnInit {

  constructor(public pedidoService: PedidoService, public dispositivoService: DispositivoService, public clienteService: ClientesService,public historialService : HistorialService) { }

  ngOnInit(): void {
    this.getPedidos();
    this.getDispositivos();
    this.getClientes();
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

   updatePedido(form: NgForm){
      this.pedidoService.putPedido(form.value).subscribe(
       res => {
         this.getPedidos();
       },
       err => console.error(err)
     )
      //Guardar en el historial 
    const historia:Historial ={
   
      user: localStorage.getItem("nombre"),
      accion:"Actualizo Pedido",
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

  editDate(pedidos: Pedidos) {
    this.pedidoService.selectedPedido = pedidos;
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
     //Guardar en el historial 
     const historia:Historial ={
   
      user: localStorage.getItem("nombre"),
      accion:"Elimino Pedido",
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