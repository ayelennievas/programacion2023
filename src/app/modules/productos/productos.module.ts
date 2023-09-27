import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosComponent } from './pages/productos/productos.component';
import { CardComponent } from './components/card/card.component';
import { EsmaltesComponent } from './pages/esmaltes/esmaltes.component';
import { DecoracionComponent } from './pages/decoracion/decoracion.component';
import { CabinasuvledComponent } from './pages/cabinasuvled/cabinasuvled.component';


@NgModule({
  declarations: [
    ProductosComponent,
    CardComponent,
    EsmaltesComponent,
    DecoracionComponent,
    CabinasuvledComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule
  ],
  exports: [
    CardComponent,
    CabinasuvledComponent,
    EsmaltesComponent,
    DecoracionComponent,
    ProductosComponent
  ]
})
export class ProductosModule { }
