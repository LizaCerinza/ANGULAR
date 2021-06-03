import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { PreciosComponent } from './components/precios/precios.component';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';
import { LoginLogoutComponent } from './components/login-logout/login-logout.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProtegidaComponent,
    PreciosComponent,
    LoginLogoutComponent,],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'dev-e9rhub1fliza.eu.auth0.com',
      clientId: 'j0HCHFulwTpH6ZbcpxxhjBuyfv0vT9d6'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
