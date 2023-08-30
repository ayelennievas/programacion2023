import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // referenciar Autentificacion de Firebase
  constructor(public auth: AngularFireAuth) { }

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
