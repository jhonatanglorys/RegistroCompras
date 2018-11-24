import { Component, OnInit } from '@angular/core';
import { CompraService } from './services/compra.service';
import { Producto} from './model/producto.model';



@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css'],
  providers:[CompraService]
})


export class ComprasComponent implements OnInit {

  constructor( private productService:CompraService) { }

 
  productList:Producto[];
  numeroProductos:number=0;
  productosComprados:number=0;
  listaProductosComprados:any[][];
  total:number=0;
  efectivo:number=0;
  ahorro:number=0;
  valorPagado:number=0;
  cambio:number=0;

  fecha:number;

  calcular(){
    this.listaProductosComprados= new Array();
    this.total=0;
    this.productosComprados=0;
    var cantidadIndividual;
    var valorProductoMultiplicado;
    var valorUnitario;
    var nombreProducto;
    var ivaProducto;
    var ivaProductos;
    var subtotal;

    for (var i=1; i<21 ;i++){
      cantidadIndividual = document.getElementById("totalproducto"+ i).value;
      if (cantidadIndividual>0){
        nombreProducto= document.querySelector("#nombreproducto"+i).innerText;
        valorUnitario = document.getElementById("valorunitario"+i).value;
        ivaProducto= document.getElementById("ivaproducto"+i).value;
        valorProductoMultiplicado=parseInt(cantidadIndividual)*parseInt(valorUnitario);
        if(parseInt(ivaProducto) == 19){
          ivaProductos= 0.19*parseInt(cantidadIndividual)*parseInt(valorUnitario);
        } else {
          ivaProductos= 0.05*parseInt(cantidadIndividual)*parseInt(valorUnitario);
        }
        subtotal=valorProductoMultiplicado-ivaProductos;
        this.total += parseInt(valorProductoMultiplicado);
        this.productosComprados=this.productosComprados + parseInt(cantidadIndividual);
        this.listaProductosComprados.push([nombreProducto,valorUnitario,cantidadIndividual,ivaProducto,ivaProductos,subtotal]);
      }
      console.log(this.listaProductosComprados);
      
    }
  }

  ngOnInit() {
    
    this.fecha=Date.now();
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
