import { Component, OnInit } from '@angular/core';
import { CompraService } from './services/compra.service';
import { Producto} from './model/producto.model';
import {Productocomprado} from './model/Productocomprado'



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
  
  listaProductosComprados:Array<Productocomprado> = [];
  total:number=0;
  efectivo:number=0;
  ahorro:number=0;
  valorPagado:number=0;
  cambio:number=0;
  ivaAcumulado19:number=0;
  ivaAcumulado5:number=0;
  ivaTotal:number=0;
  fecha:number;
  subtotalGlobal:number=0;

  calcularPago(e){
    this.cambio =  parseInt(e.target.value)-this.total;
  }

  calcular(){
    this.listaProductosComprados= new Array();
    this.total=0;
    this.subtotalGlobal=0;
    this.productosComprados=0;
    var cantidadIndividual;
    var valorProductoMultiplicado;
    var valorUnitario;
    var nombreProducto;
    var ivaProducto;
    var ivaProductos;
    this.ivaAcumulado19=0;;
    this.ivaAcumulado5=0;
    this.ivaTotal=0;
    var subtotal;

    for (var i=1; i<21 ;i++){
      cantidadIndividual = document.getElementById("totalproducto"+ i).value;
      if (cantidadIndividual>0 && (cantidadIndividual%1==0)){
        nombreProducto= document.querySelector("#nombreproducto"+i).innerText;
        valorUnitario = document.getElementById("valorunitario"+i).value;
        ivaProducto= document.getElementById("ivaproducto"+i).value;
        valorProductoMultiplicado=parseInt(cantidadIndividual)*parseInt(valorUnitario);
        if(parseInt(ivaProducto) == 19){
          ivaProductos= 0.19*parseInt(cantidadIndividual)*parseInt(valorUnitario);
          this.ivaAcumulado19 = this.ivaAcumulado19 + ivaProductos;
        } else {
          ivaProductos= 0.05*parseInt(cantidadIndividual)*parseInt(valorUnitario);
          this.ivaAcumulado5 = this.ivaAcumulado5 + ivaProductos;
        }
        this.ivaTotal=this.ivaAcumulado5+this.ivaAcumulado19;
        subtotal=valorProductoMultiplicado-ivaProductos;
        this.total += parseInt(valorProductoMultiplicado);
        this.subtotalGlobal= this.total- this.ivaTotal;
        this.productosComprados=this.productosComprados + parseInt(cantidadIndividual);
        let agregado = new Productocomprado();
        agregado.nombreProd=nombreProducto;
        agregado.vUnitario=valorUnitario;
        agregado.cantidadComprada=cantidadIndividual;
        agregado.ivaDelProductoComprado=ivaProducto;
        agregado.ivaDeLosProductosComprados=ivaProductos;
        agregado.subtotalDeLaCompra=subtotal;
        agregado.totalCompra=valorProductoMultiplicado;
        this.listaProductosComprados.push(agregado);
      }
      
      
    }
    console.log(this.listaProductosComprados);
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
