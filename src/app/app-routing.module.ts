import { GridImagenesComponent } from './components/grid-imagenes/grid-imagenes.component';
import { HomeComponent } from './components/home/home.component';
import { GridIntegrantesComponent } from './components/grid-integrantes/grid-integrantes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',component:HomeComponent
  },
  {
    path: 'empleados', component:GridIntegrantesComponent
  },
  {
    path: 'empanadas',component:GridImagenesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
