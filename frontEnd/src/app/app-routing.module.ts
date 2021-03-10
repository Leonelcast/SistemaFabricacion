import { NgModule } from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router'
import { CommonModule } from '@angular/common';
import {AuthGuard} from './auth.guard'


//COMPONENTS
import{SigninComponent} from './components/signin/signin.component'
import{SignupComponent} from './components/signup/signup.component'
import{CatalogoClienteComponent} from './components/catalogo-cliente/catalogo-cliente.component'
import{DispositivosComponent} from './components/dispositivos/dispositivos.component'



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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
