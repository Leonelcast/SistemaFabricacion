import { NgModule } from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router'
import { CommonModule } from '@angular/common';
import {AuthGuard} from './auth.guard'


//COMPONENTS
import{SigninComponent} from './components/signin/signin.component'
import{SignupComponent} from './components/signup/signup.component'
import{CatalogoClienteComponent} from './components/catalogo-cliente/catalogo-cliente.component'
import{DispositivosComponent} from './components/dispositivos/dispositivos.component'
import{PedidoComponent} from './components/pedido/pedido.component'
import{AdminPedidosComponent} from './components/admin-pedidos/admin-pedidos.component'
import { PruebaComponent } from './components/prueba/prueba.component';



const routes: Routes = [
  {
    path: 'signIn',
    component:SigninComponent
  },
  {
    path: 'signUp',
    component:SignupComponent
  },
  {
    path: 'catalogoCliente',
    component:CatalogoClienteComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'dispositivos',
    component:DispositivosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'pedidos',
    component:PedidoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'pedidosAdmin',
    component:AdminPedidosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'prueba',
    component:PruebaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }