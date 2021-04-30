import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{ Serie} from '../models/serie';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  URL_API = 'http://localhost:5000/api/serie';


  selectedSerie: Serie ={
    _id: '',
    num_serie:'',
    estado:'',
    cliente:null,
    dispositivo:null,
    pedido:null
    
  };

  series: Serie[] = [];

  constructor(private http: HttpClient) { }

  getSeries(){

    return this.http.get<Serie[]>(this.URL_API);
  }



  
  createSerie(series: Serie){
    return this.http.post<string>(this.URL_API, series);
  }
  putSeries(series: Serie){
    return this.http.put(`${this.URL_API}/${series._id}`, series);

  }
  deleteSeries(_id: string){
    return this.http.delete(`${this.URL_API}/${_id}`)
  }
}
