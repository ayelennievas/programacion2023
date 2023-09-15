import { Injectable } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private productosCollection: AngularFirestoreCollection<Producto>

  constructor( private database: AngularFirestore) {
    this.productosCollection = database.collection('productos')
   }

   //CRUD -> PRODUCTOS
   crearProducto(producto: Producto){

   }
}
