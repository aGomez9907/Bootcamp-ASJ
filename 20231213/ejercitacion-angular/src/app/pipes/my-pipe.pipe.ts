import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {

  transform(value: number[]): number[] {
   let primeArray: number[] = [];
    value.forEach(element => {
      let isPrime = true;
      if(element > 2){
        for(let i=2; i<element; i++){

          if(element%i == 0){
            isPrime = false;
          }
        }
      }else{
        isPrime = false;
      }
      if(isPrime){
        primeArray.push(element);
      }
    });
    return primeArray;

  }

}
