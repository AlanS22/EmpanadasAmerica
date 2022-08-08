import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridImagenesComponent } from './components/grid-imagenes/grid-imagenes.component';

const routes: Routes = [
  {
    path: 'empanadas',component:GridImagenesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
