import { Component, OnInit } from '@angular/core';
import { MyServiceService } from './services/my-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'ejercitacion-angular';

  personajes: any = [];

  constructor(public miServicio: MyServiceService) {}

  ngOnInit(): void {
    //llamamos al mÃ©todo "getDato()" del Servicio

    this.personajes = this.miServicio.getDataApi().subscribe((data) => {
      console.log(data); //info: {}, results: [{},{},{}]
      this.personajes = data;
    });
  }
}
