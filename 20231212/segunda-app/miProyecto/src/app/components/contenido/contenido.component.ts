import { Component } from '@angular/core';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrl: './contenido.component.css',
})
export class ContenidoComponent {
  num = 0;
  titulo = 'titulo';
  flag = false;
  persona = {
    nombre: 'alejo',
    apellido: 'gomez',
    edad: '24',
  };

  compras = ['fruta', 'carne', 'coca'];

  generarAleatorio() {
    this.num = Math.random() * 10;
  }

  incrementar() {
    this.num++;
  }

  decrementar() {
    this.num--;
  }
}
