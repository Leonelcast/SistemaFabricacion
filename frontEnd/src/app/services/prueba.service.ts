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
    _id:'',
    content:''

  };
  constructor( private http: HttpClient,
    private router: Router) { 
    
  }
  URL_API = 'http://localhost:8081/greeting';


  getPrueba(){
    return this.http.get<Prueba[]>(this.URL_API);
  }
}
