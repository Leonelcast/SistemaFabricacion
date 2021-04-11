import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import{FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { DispositivosComponent } from './components/dispositivos/dispositivos.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { CatalogoAdminComponent } from './components/catalogo-admin/catalogo-admin.component';
import { AppRoutingModule } from './app-routing.module';
import {AuthGuard} from './auth.guard';
import { PedidoComponent } from './components/pedido/pedido.component';
import { AdminPedidosComponent } from './components/admin-pedidos/admin-pedidos.component';
import { PruebaComponent } from './components/prueba/prueba.component'

@NgModule({
  declarations: [
    AppComponent,
    DispositivosComponent,
    SignupComponent,
    SigninComponent,
    CatalogoAdminComponent,
    PedidoComponent,
    AdminPedidosComponent,
    PruebaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule

  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }