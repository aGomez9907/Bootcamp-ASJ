import { Component } from '@angular/core';

@Component({
  selector: 'app-mi-body',
  templateUrl: './mi-body.component.html',
  styleUrl: './mi-body.component.css',
})
export class MiBodyComponent {
  guitars = [
    {
      name: 'Ibanez RG GIO GRX40',
      imgSrc:
        'https://http2.mlstatic.com/D_NQ_NP_979154-MLA46348940163_062021-O.webp',
      desc: 'Guitarra eléctrica de álamo candy apple con diapasón de jatoba',
    },
    {
      name: 'Fender FA-125',
      imgSrc:
        'https://http2.mlstatic.com/D_NQ_NP_771060-MLA46250076960_062021-O.webp',
      desc: 'Guitarra acústica de abeto, caoba y nato',
    },
    {
      name: 'Fender Player Telecaster',
      imgSrc:
        'https://http2.mlstatic.com/D_NQ_NP_606749-MLA46365746591_062021-O.webp',
      desc: 'Guitarra eléctrica de aliso butterscotch blonde brillante con diapasón de arce',
    },
    {
      name: 'Gibson 1963 Les Paul Sg',
      imgSrc:
        'https://http2.mlstatic.com/D_NQ_NP_869513-MLA52107950326_102022-O.webp',
      desc: 'Guitarra eléctrica de ébano con mástil de caoba',
    },
  ];
}
