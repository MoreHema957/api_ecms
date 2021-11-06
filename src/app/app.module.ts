import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import {ProductService } from './services/product.service';
import { HeaderComponent } from './pages/header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers:[ProductService],
  // providers: [ {
  //   provide: HTTP_INTERCEPTORS,
  //   useClass: ProductService,
  //   multi: true
  // }],
  bootstrap: [AppComponent]
})
export class AppModule { }
