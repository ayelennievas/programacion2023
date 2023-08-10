import { Component, OnInit } from '@angular/core';
// IMPORTAMOS NUESTRA INTERFAZ
//import { TarjetasInicio } from 'src/app/models/modelos';
// IMPORTAMOS NUEVA INTERFAZ
import { Uñas } from 'src/app/models/uñas';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  // PROPIEDAD PUBLICA (TIPO ARRAY)
  public info: Uñas[];

  // INICIALIZA LA PROPIEDAD INFO
  constructor(){
    this.info = [
      {
        id: "",
        marca: "Cherimoya",
        descripcion:"Esmalte semipermanente negro",
        imagen:"https://elspadejoy.cl/wp-content/uploads/2021/07/cherimoya-8ml-509-1024x1024.jpg",
        alt:"Esmalte"
      },
      {
        id: "",
        marca: "SUN",
        descripcion:"Cabina UV/LED",
        imagen:"https://http2.mlstatic.com/D_NQ_NP_920395-MLA33073839476_122019-F.jpg",
        alt:"Cabina de uñas"
      }
    ]
  }

  // EVENTO DE CONSTRUCCION/INICIALIZACION
  ngOnInit(): void{

  }
}
