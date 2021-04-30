import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{ Historial} from '../models/historial';



@Injectable({
  providedIn: 'root'
})
export class HistorialService {

  URL_API = 'http://localhost:5000/api/historial';

  selectedHistorial: Historial ={
    _id: '',
    fecha:null,
    user: null,
    accion:''

    
  };

  historia: Historial[] = [];

  constructor(private http: HttpClient) { }

  getHistorial(){

    return this.http.get<Historial[]>(this.URL_API);
  }
  createHistorial(historia: Historial){
    return this.http.post<string>(this.URL_API, historia);
  }
  
  putHistorial(historia: Historial){
    return this.http.put(`${this.URL_API}/${historia._id}`, historia);

  }
  deleteHistorial(_id: string){
    return this.http.delete(`${this.URL_API}/${_id}`)
  }
}