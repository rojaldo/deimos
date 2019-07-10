import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alcohol'
})
export class AlcoholPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (typeof value === 'number') {
      return value + '%';
    } else {
      console.error('Wrong type for alcohol pipe: it must be a number');
      return value;
    }

  }

}
