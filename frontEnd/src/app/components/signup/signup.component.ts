import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import {User} from '../../models/user';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user = {
    nombre:'',
    email: '',
    password: ''
  }
  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  signUp(){
    this.authService.signUp(this.user)
    .subscribe(
      res => {
        console.log(res)
        localStorage.setItem('token', res.token);
        this.router.navigate(['/catalogoAdmin'])
      },
      err => console.log(err)
    )
  }

 
}
