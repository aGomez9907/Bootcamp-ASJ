import { Component } from '@angular/core';
import { MyPipePipe } from '../../pipes/my-pipe.pipe';


@Component({
  selector: 'app-pipes-practice',
  templateUrl: './pipes-practice.component.html',
  styleUrl: './pipes-practice.component.css'
})
export class PipesPracticeComponent {
 myArray: number[] = [];
 
 ngOnInit():any{
  this.randomArray(this.myArray,50);
 }

 

 public randomArray(arr: number[], n: number ): number[]{
  for(let i=0;i<n ; i++){
    arr.push(Number(Math.random().toFixed(1)))
  }
  return arr;
 }

}

