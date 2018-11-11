import { Component, OnInit } from '@angular/core';
import {CompraService} from '../services/compra.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {

  constructor(private productoService:CompraService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(productoForm:NgForm){
    if(productoForm.value.$key==null){
      this.productoService.insertarProducto(productoForm.value);
    }
    
    else{

    this.resetForm(productoForm);
    }

  }
  resetForm(productoForm?:NgForm){
    if(productoForm!=null)
      productoForm.reset();
    this.productoService.selectedProduct={
      $key:null,
      codigo:'',
      producto:'',
      valorunitario:0,
      iva:0

    }
  }
}
