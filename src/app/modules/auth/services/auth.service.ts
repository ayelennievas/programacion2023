import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // referenciar Autentificacion de Firebase
  constructor(public auth: AngularFireAuth) { }

  //funcion para el inicio de sesion
  iniciarSesion(email: string, contrasena:string){
    return this.auth.signInWithEmailAndPassword(email, contrasena);
  }

  //
  cerrarSesion(){
    //devuelve una promesa vacia
    return this.auth.signOut();
  }

  // retorna nueva informacion de register
  registrar(nombre: string, contrasena: string) {
  return this.auth.createUserWithEmailAndPassword(nombre, contrasena);
  }

  //funcion asincronica para tomar UID
  async getUid(){
  // CURRENTUSER -> JUNTO A LA PROMESA, GENERA CAPTURA
  const user = await this.auth.currentUser;

  if(user == null){
    return null;
  }
  else{
    return user.uid;
  }
 }
}
