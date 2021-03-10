import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import{FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { DispositivosComponent } from './components/dispositivos/dispositivos.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { CatalogoClienteComponent } from './components/catalogo-cliente/catalogo-cliente.component';
import { AppRoutingModule } from './app-routing.module';
import {AuthGuard} from './auth.guard';
import { PedidoComponent } from './components/pedido/pedido.component'

@NgModule({
  declarations: [
    AppComponent,
    DispositivosComponent,
    SignupComponent,
    SigninComponent,
    CatalogoClienteComponent,
    PedidoComponent
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
