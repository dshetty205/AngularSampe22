import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'positivepipe'
})
export class PositivePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const newVal = value > 0 ? ('+' + value) : value;
    return newVal;
  }
}
