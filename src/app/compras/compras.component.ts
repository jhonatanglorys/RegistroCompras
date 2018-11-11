import { Component, OnInit } from '@angular/core';
import { CompraService } from './services/compra.service';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css'],
  providers:[CompraService]
})
export class ComprasComponent implements OnInit {

  constructor(private productoService:CompraService) { }

  ngOnInit() {
   
    
  }

}
