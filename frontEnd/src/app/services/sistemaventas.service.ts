
import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class VentasService {

  URL_API = 'http://localhost:8081/greeting';

  

  constructor(private http: HttpClient) { }

  
}

