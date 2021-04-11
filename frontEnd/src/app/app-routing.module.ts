import { NgModule } from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router'
import { CommonModule } from '@angular/common';
import {AuthGuard} from './auth.guard'


//COMPONENTS
import{SigninComponent} from './components/signin/signin.component'
import{SignupComponent} from './components/signup/signup.component'
import{CatalogoAdminComponent} from './components/catalogo-admin/catalogo-admin.component'
import{DispositivosComponent} from './components/dispositivos/dispositivos.component'
import{PedidoComponent} from './components/pedido/pedido.component'
import{AdminPedidosComponent} from './components/admin-pedidos/admin-pedidos.component'
import { PruebaComponent } from './components/prueba/prueba.component';
import { ReporteComponent } from './components/reporte/reporte.component';




const routes: Routes = [
  {
    path: 'signIn',
    component:SigninComponent
  },
  {
    path: 'signUp',
    component:SignupComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'catalogoAdmin',
    component:CatalogoAdminComponent,
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
  },
  {
    path: 'reporte',
    component:ReporteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }