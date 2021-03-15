import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user';

@Component({
  selector: 'app-catalogo-cliente',
  templateUrl: './catalogo-cliente.component.html',
  styleUrls: ['./catalogo-cliente.component.css']
})
export class CatalogoClienteComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.getUser();
  }
  getUser() {
    this.authService.getUser().subscribe(
      res =>{
        this.authService.user = res;
      },
      err => console.error(err)
    );
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
