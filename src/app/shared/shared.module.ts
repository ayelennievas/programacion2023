import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';

//api angular material
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

//componentes
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    //api angular material
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    
  ],
  exports: [
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    NavbarComponent
    
  ]
})
export class SharedModule { }
