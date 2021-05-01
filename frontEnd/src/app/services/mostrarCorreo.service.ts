import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reporte } from '../models/reporte';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {

  URL_API = 'http://localhost:8081/getReporte';


  selectedReporte: Reporte = {

    nombret: '',
    cantidadp: 0,
    cantidadp_a: 0,
    total_c: 0,
    ventas: ''
   
  };
  reportes: Reporte[] = [];
  constructor(private http: HttpClient) { }


  
  getRepos(){
    
    return this.http.get<Reporte[]>(this.URL_API);
   
   
  }

 
 
 

}
