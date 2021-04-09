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
    public authService: AuthService,
    public router: Router
    ) { }

  ngOnInit(): void {
  }

  signUp(){
    this.authService.signUp(this.user)
    .subscribe(
      res => {
        console.log(res)
        localStorage.setItem('token', res.token);
        this.router.navigate(['/signUp'])

      },
      err => console.log(err)
    )
  }

  getUser() {
    this.authService.getUser().subscribe(
      res =>{
        this.authService.user = res;
      },
      err => console.error(err)
    );
  }

  updateUser(form: NgForm){
    if(form.value._id){
      this.authService.putUser(form.value).subscribe(
       res => {
         this.getUser();
       },
       err => console.error(err)
     )
    }
    location.reload();
  }

  editUser(user: User) {
    this.authService.selectedUser = user;
  }
  deleteUser(id: string) {
    if (confirm('¿estas seguro de que lo quieres eliminar?')) {
      this.authService.deleteUser(id).subscribe(
        (res) => {
          this.getUser();
        },
        (err) => console.error(err)
      );
    }

  }
}
