import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Router} from '@angular/router'
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private URL = 'http://25.2.28.163:5000/api'
  selectedUser: User={
    _id:'',
    nombre:'',
    email:'',
    roles:''
  };

  constructor(
    private http: HttpClient,
    private router: Router) { }
    
    
    URL_API = 'http://25.2.28.163:5000/api/users';
    user: User[] = [];
    
  
   
   deleteUser(_id: string){
    return this.http.delete(`${this.URL_API}/${_id}`)
  }
  putUser(user: User){
    return this.http.put(`${this.URL_API}/${user._id}`, user);

  }
  signUp(user:any){
   return this.http.post<any>(this.URL + '/users', user);
  }

  signIn(user:any){
    return this.http.post<any>(this.URL + '/users/signIn', user);
   }

   loggedIn() {
     return !!localStorage.getItem('token')
   }


  

   logOut(){
     localStorage.removeItem('token');
     this.router.navigate(['/signIn'])
   }

  getUser(){
    return this.http.get<User[]>(this.URL_API);
  }

  rol(){
    return localStorage.getItem
   }
 
}
