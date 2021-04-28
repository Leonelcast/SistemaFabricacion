import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import{ Aggregate2} from '../models/aggregate2';
@Injectable({
  providedIn: 'root'
})
export class Aggregate2Service {
  URL_API = 'http://localhost:5000/api/pedidos/read/aggregate2';
  selectedAggregate2: Aggregate2 ={
    _id: '',
    nombre:'',
    usuario:'',
    dias_entrega: 0,
    fecha_p: '',
    fecha_e: '',
    estado: '',
    

  };
  aggregate2: Aggregate2[] =[];
  constructor(private http: HttpClient) { }
  getAggregate2(){

    return this.http.get<Aggregate2[]>(this.URL_API);
  }
}
