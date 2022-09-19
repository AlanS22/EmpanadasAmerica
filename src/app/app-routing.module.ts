import { GridImagenesComponent } from './components/grid-imagenes/grid-imagenes.component';
import { HomeComponent } from './components/home/home.component';
import { GridIntegrantesComponent } from './components/grid-integrantes/grid-integrantes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';

const routes: Routes = [
  {
    path: '',component:HomeComponent
  },
  {
    path: 'empleados', component:GridIntegrantesComponent
  },
  {
    path: 'empanadas',component:GridImagenesComponent
  },
  {
    path: 'contacto',component:ContactoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
