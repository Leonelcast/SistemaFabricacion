import { Component, OnInit } from '@angular/core';

import { ClientesService } from '../../services/clientes.service';
import { NgForm } from '@angular/forms';
import { Cliente } from '../../models/cliente'


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {


  constructor(public clientesService: ClientesService) { }

  ngOnInit(): void {
    this.getClientes();
  }
  addCliente(form: NgForm) {
   
    this.clientesService.createCliente(form.value).subscribe(
      res => {
        this.getClientes();
      },
      err => console.error(err)
    )
    location.reload();
  }

  getClientes() {
    this.clientesService.getClientes().subscribe(
      res => {
        this.clientesService.clientes = res;
      },
      err => console.error(err)
    );

  }

  updateCliente(form: NgForm){
    if(form.value._id){
      this.clientesService.putCliente(form.value).subscribe(
       res => {
         this.getClientes();
       },
       err => console.error(err)
     )
    }
    location.reload();
  }
  editCliente(cliente: Cliente) {
    this.clientesService.selectedCliente = cliente;
  }

  deleteCliente(id: string) {
    if (confirm('¿estas seguro de que lo quieres eliminar?')) {
      this.clientesService.deleteCliente(id).subscribe(
        (res) => {
          this.getClientes();
        },
        (err) => console.error(err)
      );
    }

  }


 


}
