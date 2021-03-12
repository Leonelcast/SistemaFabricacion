import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{ Pedidos} from '../models/pedido';


@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  URL_API = 'http://localhost:5000/api/pedidos';

  selectedPedido: Pedidos ={
    _id: '',
    cantidad: 0,
    total: 0,
    fecha_p: new Date(),
    fecha_e: new Date(),
    dispositivo:'',
    user:''

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
