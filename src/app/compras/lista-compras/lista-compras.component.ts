import { Component, OnInit } from '@angular/core';
import { CompraService} from '../services/compra.service';
import { Producto} from '../model/producto.model';

@Component({
  selector: 'app-lista-compras',
  templateUrl: './lista-compras.component.html',
  styleUrls: ['./lista-compras.component.css']
})
export class ListaComprasComponent implements OnInit {
  productList:Producto[];

  constructor( private productService:CompraService) { }

  ngOnInit() {
    var x = this.productService.getData();
    x.snapshotChanges().subscribe(item =>{
      this.productList=[];
      item.forEach(element=>{
        var y = element.payload.toJSON();
        y['$key'] = element.key;
        this.productList.push(y as Producto)
      });
    });
  }

}
