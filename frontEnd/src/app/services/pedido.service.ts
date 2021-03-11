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

  dispositivos: Pedidos[] = [];

  constructor(private http: HttpClient) { }

  getDispositivos(){

    return this.http.get<Dispositivo[]>(this.URL_API);
  }
  createDispositivo(dispositivo: Dispositivo){
    return this.http.post<string>(this.URL_API, dispositivo);
  }
  putDispositivo(dispositivo: Dispositivo){
    return this.http.put(`${this.URL_API}/${dispositivo._id}`, dispositivo);

  }
  deleteDispositivo(_id: string){
    return this.http.delete(`${this.URL_API}/${_id}`)
  }
}
