import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Prueba} from '../models/prueba';


@Injectable({
  providedIn: 'root'
})
export class PruebaService {
  prueba: Prueba[] = [];

  selectedPrueba: Prueba={
    id_dispositivo: 0,
    numero_serie: 0,
    nombre_marca: '',
    nombret: '',
    descripcion: '',
    existencia: 0,
    precio_lista: 0,
    codigo_modelo: '',
    ram: 0,
    almacenamiento: 0,
    procesador:'',
    numero_cores: 0,
    color: ''
  };
  constructor( private http: HttpClient,
    private router: Router) { 
    
  }
  URL_API = 'http://localhost:8081/data';


  getPrueba(){
    return this.http.get<Prueba[]>(this.URL_API);
  }
}
