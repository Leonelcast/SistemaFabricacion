import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service'
import {Router} from '@angular/router'
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  user = {
  
    email: '',
    password: ''
  }

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  signIn(){
    this.authService.signIn(this.user)
    .subscribe(
      res => {
        console.log(res);
        console.log("algoasdfasdfasdfsadfasdfasfasdfsdadfdfasdfs");
        console.log(this.user.email);
          
        localStorage.setItem('token', res.token);
        localStorage.setItem('nombre', this.user.email);


        this.router.navigate(['/dispositivos'])
      },
      err => console.log(err)
    )
  }

}
