import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './pages/productos/productos.component';
import { CabinasuvledComponent } from './pages/cabinasuvled/cabinasuvled.component';
import { DecoracionComponent } from './pages/decoracion/decoracion.component';
import { EsmaltesComponent } from './pages/esmaltes/esmaltes.component';

const routes: Routes = [
  {
    path:"productos",component:ProductosComponent
  },
  {
    path:"cabinasuvled",component:CabinasuvledComponent
  },
  {
    path:"decoracion",component:DecoracionComponent
  },
  {
    path:"esmaltes",component:EsmaltesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
