import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../../../services/my-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-card',
  templateUrl: './my-card.component.html',
  styleUrl: './my-card.component.css',
})
export class MyCardComponent implements OnInit {
  character: any;
  characterId: any;
  constructor(
    public myService: MyServiceService,
    public route: ActivatedRoute
  ) {
    this.myService;
  }
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.characterId = +params['id'];
    });
    this.character = this.myService
      .getCharacterApi(this.characterId)
      .subscribe((data) => {
        console.log(data);
        this.character = data;
      });
  }
}
