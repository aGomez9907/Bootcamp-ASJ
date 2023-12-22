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
import { Proyecto3Component } from './components/proyecto-3/proyecto-3.component';
import { MyServiceService } from './services/my-service.service';
import { HttpClientModule } from '@angular/common/http';
import { MyListComponent } from './components/proyecto-3/my-list/my-list.component';
import { MyCardComponent } from './components/proyecto-3/my-card/my-card.component';
import { PipesPracticeComponent } from './components/pipes-practice/pipes-practice.component';
import { MyPipePipe } from './pipes/my-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MiHeaderComponent,
    MiFooterComponent,
    MiMainComponent,
    Proyecto1Component,
    MiNavbarComponent,
    Proyecto2Component,
    Proyecto3Component,
    MyListComponent,
    MyCardComponent,
    PipesPracticeComponent,
    MyPipePipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [MyServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
