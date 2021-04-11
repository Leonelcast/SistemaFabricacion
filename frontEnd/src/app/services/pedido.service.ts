import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{ Pedidos} from '../models/pedido';
import {Dispositivo} from '../models/dispositivos';


@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  URL_API = 'http://25.2.28.163:5000/api/pedidos';

  selectedPedido: Pedidos ={
    _id: '',
    cantidad: 0,
    total:0,
    fecha_p: '',
    fecha_e: '',
    dispositivo:null,
    user:null,
    estado:''

  };

  pedido: Pedidos[] = [];

  constructor(private http: HttpClient) { }

  getPedidos(){

    return this.http.get<Pedidos[]>(this.URL_API);
  }
  createPedido(pedido: Pedidos){
    return this.http.post<string>(this.URL_API, pedido);
  }
  putPedido(pedido: Pedidos){
    return this.http.put(`${this.URL_API}/${pedido._id}`, pedido);

  }
  deletePedido(_id: string){
    return this.http.delete(`${this.URL_API}/${_id}`)
  }
}