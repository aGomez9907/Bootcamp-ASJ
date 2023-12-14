import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContenidoComponent } from './components/contenido/contenido.component';
import { ListaComponent } from './components/lista/lista.component';
import { MiHeaderComponent } from './components/mi-header/mi-header.component';
import { MiFooterComponent } from './components/mi-footer/mi-footer.component';
import { MiBodyComponent } from './components/mi-body/mi-body.component';
import { MiHomeComponent } from './components/mi-home/mi-home.component';
import { MiSideComponent } from './components/mi-side/mi-side.component';

@NgModule({
  declarations: [
    AppComponent,
    ContenidoComponent,
    ListaComponent,
    MiHeaderComponent,
    MiFooterComponent,
    MiBodyComponent,
    MiHomeComponent,
    MiSideComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [
    AppComponent,
    MiHeaderComponent,
    MiFooterComponent,
    MiHomeComponent,
    MiBodyComponent,
  ],
})
export class AppModule {}
