import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private URL = 'http://localhost:5000/api'

  constructor(
    private http: HttpClient,
    private router: Router) { }

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

   URL_API = 'http://localhost:5000/api/users';
  selectedUser: User={
    _id:"",
    nombre:"",
    email:""
  };
  user: User[] = [];
  getUser(){
    return this.http.get<User[]>(this.URL_API);
  }
}
