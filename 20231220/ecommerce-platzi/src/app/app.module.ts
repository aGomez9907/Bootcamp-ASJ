import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/shared/header/header.component';
import { HttpClientModule } from '@angular/common/http'; 
import { MainComponent } from './components/views/main/main.component';
import { ProductComponent } from './components/views/product/product.component';
import { CartComponent } from './components/views/cart/cart.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, MainComponent, ProductComponent, CartComponent, SidebarComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
