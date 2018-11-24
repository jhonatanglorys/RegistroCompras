import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  

  constructor() { }

 
  ngOnInit() {
    function cambio(){
      console.log("cambio");
    }
  }

}
