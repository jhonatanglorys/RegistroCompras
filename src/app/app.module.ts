import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { ComprasComponent } from './compras/compras.component';
import { CompraComponent } from './compras/compra/compra.component';
import { ListaComprasComponent } from './compras/lista-compras/lista-compras.component';
import {FormsModule} from '@angular/forms';
//import { ToastrModule} from 'ngx-toastr'; 

@NgModule({
  declarations: [
    AppComponent,
    ComprasComponent,
    CompraComponent,
    ListaComprasComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    AngularFireDatabaseModule, FormsModule,//ToastrModule.forRoot()
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
