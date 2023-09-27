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
     return new Promise(async(resolve, reject)=>{
      try{
        //creamos constante que guarde nuevo ID
        const idProducto = this.database.createId();

        //se lo asignamos al atributo ID de la interfaz Producto
        producto.idProducto = idProducto;

        const resultado = await this.productosCollection.doc(idProducto).set(producto)

        resolve(resultado);
      }catch (error){
        reject(error);
      }
     })
   }

   obtenerProducto(){
    //snapshotChanges -> toma captura del estado de los datos
    // pipe -> funciona como tuberia,retorna el nuevo arreglo
    //map -> "mapea" o recorre esa nueva informacion
    // a -> resguarda la nueva informacion y la envia
    return this.productosCollection.snapshotChanges().pipe(map(action => action.map(a => a.payload.doc.data())))
   }
}
