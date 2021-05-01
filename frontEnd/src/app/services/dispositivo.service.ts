import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{ Dispositivo} from '../models/dispositivos';

@Injectable({
  providedIn: 'root'
})
export class DispositivoService {

  URL_API = 'http://localhost:5000/api/dispositivos';

  selectedDispositivo: Dispositivo ={
    _id: '',
    color:'',
    descripcion:'',
    modelo:'',
    codigo_modelo:'',
    existencia:0,
    precio:0,
    ram:0,
    almacenamiento:0,
    procesador: '',
    numero_cores:0,
    marca: '',
    numeroSerie:'',
    foto1:'',
    foto2:'',
    foto3:''

  };

  

  dispositivos: Dispositivo[] = [];

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