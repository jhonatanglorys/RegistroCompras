import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Producto } from './../model/producto.model';

@Injectable({
  providedIn: 'root'
})
export class CompraService {
  productoList:AngularFireList<any>;
  selectedProduct:Producto = new Producto();
  constructor(private firebase: AngularFireDatabase) { }

  getData(){
    this.productoList=this.firebase.list('productos');
    return this.productoList;
  }

  insertarProducto(producto:Producto){
    this.getData();
    this.productoList.push({
      codigo:producto.codigo,
      producto:producto.producto,
      valorunitario:producto.valorunitario,
      iva:producto.iva
    });
  }

  actualizarProducto(producto:Producto){
    this.productoList.update(producto.$key,{
      codigo:producto.codigo,
      producto:producto.producto,
      valorunitario:producto.valorunitario,
      iva:producto.iva
    });
  }

  borrarProducto($key:string){
    this.productoList.remove($key);
  }
}
