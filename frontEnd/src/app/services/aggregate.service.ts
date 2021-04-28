import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import{ Aggregate} from '../models/aggregate';
import {Dispositivo} from '../models/dispositivos';
@Injectable({
  providedIn: 'root'
})
export class AggregateService {

  URL_API = 'http://25.2.28.163:5000/api/pedidos/read/aggregate';
  selectedAggregate: Aggregate ={
    _id: '',
    dispositivo: '',
    cantidad:0

  };
  aggregate: Aggregate[] =[];
  constructor(private http: HttpClient) { }
  getAggregate(){

    return this.http.get<Aggregate[]>(this.URL_API);
  }
}
