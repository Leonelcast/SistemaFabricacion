import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{ Cliente} from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  URL_API = 'http://25.2.28.163:5000/api/cliente';

  selectedCliente: Cliente ={
    _id: '',
    nombre:'',
    patente:'',
    usuario:'',
    contra:'',
    ip:'',
    puerto: '',
    dias_entrega:0
  };

  clientes: Cliente[] = [];

  constructor(private http: HttpClient) { }

  getClientes(){

    return this.http.get<Cliente[]>(this.URL_API);
  }
  createCliente(cliente: Cliente){
    return this.http.post<string>(this.URL_API, cliente);
  }
  putCliente(cliente: Cliente){
    return this.http.put(`${this.URL_API}/${cliente._id}`, cliente);

  }
  deleteCliente(_id: string){
    return this.http.delete(`${this.URL_API}/${_id}`)
  }
}
