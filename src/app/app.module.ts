import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrmClienteComponent } from './Cliente/frm-cliente/frm-cliente.component';
import { LstClienteComponent } from './Cliente/lst-cliente/lst-cliente.component';
import { FormsModule } from '@angular/forms';
import { UptClienteComponent } from './Cliente/upt-cliente/upt-cliente.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FrmClienteComponent,
    LstClienteComponent,
    UptClienteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
