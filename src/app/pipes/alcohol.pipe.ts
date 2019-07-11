import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alcohol'
})
export class AlcoholPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (typeof value === 'number') {
      const intPart = Math.floor(value);
      const decPart = Math.floor((value % 1) * 10);

      return intPart + ',' + decPart + '%';
    } else {
      console.error('Wrong type for alcohol pipe: it must be a number');
      return value;
    }

  }

}
