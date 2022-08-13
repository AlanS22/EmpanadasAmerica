import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GridImagenesComponent } from './components/grid-imagenes/grid-imagenes.component';
import { HomeComponent } from './components/home/home.component';
import { GridIntegrantesComponent } from './components/grid-integrantes/grid-integrantes.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GridImagenesComponent,
    HomeComponent,
    GridIntegrantesComponent,
    FooterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
