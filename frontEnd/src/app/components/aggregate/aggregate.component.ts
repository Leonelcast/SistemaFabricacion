import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../services/pedido.service';
import { DispositivoService } from '../../services/dispositivo.service';
import {ClientesService} from '../../services/clientes.service';
import {AggregateService} from '../../services/aggregate.service';

import { NgForm } from '@angular/forms';
import { Pedidos } from '../../models/pedido'

@Component({
  selector: 'app-aggregate',
  templateUrl: './aggregate.component.html',
  styleUrls: ['./aggregate.component.css']
})
export class AggregateComponent implements OnInit {

  constructor(public pedidoService: PedidoService, public dispositivoService: DispositivoService, public clienteService: ClientesService, public aggregateService: AggregateService) { }

  ngOnInit(): void {
    this.getPedidos();
    this.getDispositivos();
    this.getClientes();
    this.getAggregate();
  }

  getDispositivos() {
    this.dispositivoService.getDispositivos().subscribe(
      res => {
        this.dispositivoService.dispositivos = res;
      },
      err => console.error(err)
    );

  }
  getAggregate() {
    this.aggregateService.getAggregate().subscribe(
      res => {
        this.aggregateService.aggregate = res;
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

}
