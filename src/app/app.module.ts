import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { ComprasComponent } from './compras/compras.component';
import { CompraComponent } from './compras/compra/compra.component';
import { ListaComprasComponent } from './compras/lista-compras/lista-compras.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
//import { ToastrModule} from 'ngx-toastr'; 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule, MatInputModule, MatOptionModule} from '@angular/material';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ItemComponent } from './compras/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    ComprasComponent,
    CompraComponent,
    ListaComprasComponent,
    ItemComponent
  ],
  entryComponents:[ItemComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    AngularFireDatabaseModule, FormsModule,ReactiveFormsModule,//ToastrModule.forRoot()
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatOptionModule,
    MatAutocompleteModule
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
