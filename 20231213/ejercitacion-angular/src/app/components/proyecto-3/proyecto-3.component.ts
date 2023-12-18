import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../../services/my-service.service';

@Component({
  selector: 'app-proyecto-3',
  templateUrl: './proyecto-3.component.html',
  styleUrl: './proyecto-3.component.css',
})
export class Proyecto3Component implements OnInit {
  //un componente que tenga la lista
  //otro que tenga la card del personaje cuando se le hace click
  //no vamos a necesitar que los componentes se comuniquen pero si necesito que ambos consuman la api (dos metodos)

  personajes: any = [];

  constructor(public myService: MyServiceService) {
    this.myService;
  }
  ngOnInit(): void {
    this.personajes = this.myService.getDataApi().subscribe((data) => {
      console.log(data);
      this.personajes = data;
    });
  }
}
