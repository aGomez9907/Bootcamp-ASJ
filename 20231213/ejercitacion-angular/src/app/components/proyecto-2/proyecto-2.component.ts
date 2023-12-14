import { Component } from '@angular/core';

@Component({
  selector: 'app-proyecto-2',
  templateUrl: './proyecto-2.component.html',
  styleUrl: './proyecto-2.component.css',
})
export class Proyecto2Component {
  characterName: string = '';
  characterImg: string = '';
  characterProfession: string = '';
  bigImage: string = '';

  characters = [
    {
      name: 'Homer Simpson',
      img: 'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png',
      profession: 'Trabajador en la Planta Nuclear de Springfield',
    },
    {
      name: 'Marge Simpson',
      img: 'https://i.pinimg.com/originals/32/3d/22/323d22b073ade8e4cd4f2958ba23e4cb.jpg',
      profession: 'Ama de casa',
    },
    {
      name: 'Montgomery Burns',
      img: 'https://c0.klipartz.com/pngpicture/812/284/gratis-png-senor-quemaduras-estereotipadas-del-dibujo-de-personajes-simpsons-thumbnail.png',
      profession: 'Dueño de la Planta Nuclear de Springfield',
    },
  ];

  addCharacter() {
    let newCharacter = {
      name: this.characterName,
      img: this.characterImg,
      profession: this.characterProfession,
    };
    this.characters.push(newCharacter);
    this.characterName = '';
    this.characterImg = '';
    this.characterProfession = '';
  }

  showImage(i: number) {
    this.bigImage = this.characters[i].img;
  }
}
