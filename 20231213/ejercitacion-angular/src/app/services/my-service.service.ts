import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MyServiceService {
  constructor(private http: HttpClient) {
    console.log('servicio funcionando');
  }
  // getDatos(){
  //   //esto no va a estar hardcodeado, va a venir de una db
  //   let data= [
  //     {
  //       title: 'Hacer funcionar el boton para borrar',
  //       description:
  //         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, recusandae.',
  //       date: '11-11-2023',
  //       isDone: false,
  //     },
  //     {
  //       title: 'hacer que el tachado tache solo una tarjeta',
  //       description:
  //         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, recusandae.',
  //       date: '13-11-2023',
  //       isDone: false,
  //     },
  //     {
  //       title: 'otra cosa',
  //       description:
  //         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, recusandae.',
  //       date: '13-11-2023',
  //       isDone: false,
  //     },
  //     {
  //       title: 'algo mas',
  //       description:
  //         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, recusandae.',
  //       date: '13-11-2023',
  //       isDone: false,
  //     },

  //   ]
  //   return data;
  // }

  getDataApi() {
    return this.http.get('https://rickandmortyapi.com/api/character/?page=1');
  }

  public getCharacterApi(id: number) {
    return this.http.get('https://rickandmortyapi.com/api/character/' + id);
  }
}
