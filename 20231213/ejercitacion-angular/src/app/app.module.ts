import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiHeaderComponent } from './components/mi-header/mi-header.component';
import { MiFooterComponent } from './components/mi-footer/mi-footer.component';
import { MiMainComponent } from './components/mi-main/mi-main.component';
import { Proyecto1Component } from './components/proyecto-1/proyecto-1.component';
import { MiNavbarComponent } from './components/mi-navbar/mi-navbar.component';
import { Proyecto2Component } from './components/proyecto-2/proyecto-2.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    MiHeaderComponent,
    MiFooterComponent,
    MiMainComponent,
    Proyecto1Component,
    MiNavbarComponent,
    Proyecto2Component,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
