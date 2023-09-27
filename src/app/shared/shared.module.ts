import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';

//api angular material
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';

//componentes
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    // DECLARAMOS COMPONENTES NAVBAR Y FOOTER
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
    MatMenuModule
    
    
  ],
  exports: [
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    NavbarComponent,
    MatMenuModule
    
  ]
})
export class SharedModule { }
