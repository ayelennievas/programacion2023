import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Usuario } from 'src/app/models/usuario';
import { FirestoreService } from 'src/app/shared/services/firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  hide = true; // input de contraseña

  // definimos de forma publica el servicio Auth y servicioFirestore
  constructor(public servicioAuth:AuthService,
    public servicioFirestore: FirestoreService,
    public router: Router
    ){}

    // importacion del modelo
    usuarios: Usuario = {
      uid: '',
      nombre1:'',
      email: '',
      rol: '',
      contrasena: ''
    }

    uid = '';

   // creamos nueva coleccion para Usuarios
    coleccionUsuarios: Usuario[] = [];

   // tomando nuevo registro
   // ASYNC = ASINCRONICO
   async registrarse(){
    const credenciales = {
      email: this.usuarios.email,
      contrasena: this.usuarios.contrasena
    };

    const res = await this.servicioAuth.registrar(credenciales.email, credenciales.contrasena)
    // metodo THEN 
    .then(res =>{
      alert("Ha agregado un nuevo usuario con exito :)");

      this.router.navigate(["/inicio"]);
    })
    // metodo CATCH creara un error en caso de que algo salga mal
    .catch(error => 
      alert("Hubo un error al crear el usuario :( \n"+error)
      );

    // creamos constante UID para el UID que obtengamos
    const uid = await this.servicioAuth.getUid();

    //referenciamos el uid nuevo con el de usuario
    this.usuarios.uid = uid;

    //llamamos funcion guardarUSer
    this.guardarUser();
   } 

   // funcion asincronica para guardar usuarios
   async guardarUser(){
    this.servicioFirestore.agregarUsuario(this.usuarios, this.usuarios.uid)
    .then(res =>{
      console.log(this.usuarios);
    })
    .catch(error => {
      console.log('Error =>', error);
    })
   }

   async ngOninit(){
    const uid = await this.servicioAuth.getUid();
    console.log(uid);
   }
}
