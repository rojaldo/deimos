import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alcohol'
})
export class AlcoholPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (typeof value === 'number') {
      const intPart = Math.floor(value);
      const decPart = Math.floor((value % 1) * 10);
      let separator = ',';
      if (args) {
        switch (args[0]) {
          case ',':
            separator = ',';
            break;
          case '.':
            separator = '.';
            break;

          default:
            separator = ',';
            console.error('Wrong separator: ' + args[0]);
            break;
        }
      }
      return intPart + separator + decPart + '%';
    } else {
      console.error('Wrong type for alcohol pipe: it must be a number');
      return value;
    }

  }

}
