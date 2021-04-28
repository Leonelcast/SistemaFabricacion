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
    fecha_p: null,
    fecha_e: null,
    dispositivo: null, 
    cliente:null,
    estado:'',
    num_serie:[]

  };

  pedido: Pedidos[] = [];

  constructor(private http: HttpClient) { }

  getPedidos(){

    return this.http.get<Pedidos[]>(this.URL_API);
  }
  createPedido(pedido: Pedidos,modelo : string | undefined){
   
    pedido.num_serie = []; 

    console.log(pedido.cantidad);
  

    for(var i=1; i <= pedido.cantidad ; i++){
     
      var num = Math.floor(Math.random() * (10000000000000 - 1000000000));

      let numserie = "F-" + modelo + "/"+ num ;
     
      pedido.num_serie.push(numserie);
       pedido.num_serie.push("1")


    

   }
    


    return this.http.post<string>(this.URL_API, pedido);
  }




 


  putPedido(pedido: Pedidos){
    return this.http.put(`${this.URL_API}/${pedido._id}`, pedido);

  }
  deletePedido(_id: string){
    return this.http.delete(`${this.URL_API}/${_id}`)
  }
}