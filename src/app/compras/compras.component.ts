import { Component, OnInit } from '@angular/core';
import { CompraService } from './services/compra.service';
import { Producto} from './model/producto.model';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css'],
  providers:[CompraService]
})
export class ComprasComponent implements OnInit {
  myControl = new FormControl();
  productList:Producto[];
  numeroProductos:number=0;
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


  agregarProducto(){
    
    var contenedorProductos = document.getElementById("listaProductos");
    var nuevoProducto = document.createElement('div');
    nuevoProducto.innerHTML='<div class="form-row">'
    + '<div class="form-group col-md-2">'
     + '<label for="codigoproducto">Producto</label>'
     + '<select name="producto'+ this.numeroProductos +'" id="producto'+ this.numeroProductos+'" class="form-control">'
     + '<option value="0">Seleccione un producto</option>'
     + '<option value="1">Bolsa de regalo</option>'
     + '<option value="2">Botella deportiva</option>'
     + '<option value="3">Panuelo facial</option>'
     + '<option value="4">Pan perro</option>'
     + '<option value="5">Pan tajado</option>'
     + '<option value="6">Mermelada</option>'
     + '<option value="7">Arroz</option>'
     + '<option value="8">Acondicionador</option>'
     + '<option value="9">Pañales etapa 2 x 30</option>'
     + '<option value="10">Banano criollo</option>'
     + '<option value="11">Crema dental x 3</option>'
     + '<option value="12">Te helado</option>'
     + '<option value="13">Galleta x 3 tacos</option>'
     + '<option value="14">Cereal</option>'
     + '<option value="15">Shampoo</option>'
     + '<option value="16">Pasta larga</option>'
     + '<option value="17">Avena 500g</option>'
     + '<option value="18">Cuajada</option>'
     + '<option value="20">Servilletas x 100</option>'
     + '</select>'
    + '</div>'
    + '<div class="form-group col-md-2">'
    + '<label for="valorunitario">Cantidad</label>'
    + '<input type="number" class="form-control" min="1" name="cantidad" placeholder="Cantidad" required>'
    + ' </div>'
    
    + '</div>';
    while(nuevoProducto.firstChild){
      contenedorProductos.appendChild(nuevoProducto.firstChild);
    }
    this.numeroProductos++;
  }
}
