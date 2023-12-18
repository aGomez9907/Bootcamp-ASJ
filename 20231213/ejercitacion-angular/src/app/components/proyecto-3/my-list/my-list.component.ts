import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../../../services/my-service.service';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrl: './my-list.component.css',
})
export class MyListComponent implements OnInit {
  characters: any = [];

  constructor(public myService: MyServiceService) {
    this.myService;
  }
  ngOnInit(): void {
    this.characters = this.myService.getDataApi().subscribe((data) => {
      console.log(data);
      this.characters = data;
    });
  }
}
