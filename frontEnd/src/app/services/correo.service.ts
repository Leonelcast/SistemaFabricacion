import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Correo } from '../models/correo';

@Injectable({
  providedIn: 'root'
})
export class CorreoService {

  URL_API = 'http://localhost:5000/api/pedidos/enviar/mail';

  selectedCorreo: Correo = {

    email: null
   
  };
  historia: Correo[] = [];
  constructor(private http: HttpClient) { }

  sendCorreo(correo: Correo){
    return this.http.post<string>(this.URL_API, correo);
  }
  
 

}
