import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceDivisors'
})
export class PriceDivisorsPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    const priceDivisors = [
      { value: 1, label: 'Single' },
      { value: 2, label: '2 Pack' },
      { value: 4, label: '4 Pack' },
      { value: 6, label: '6 Pack' },
      { value: 12, label: '12 Pack' },
      { value: 24, label: '24 Pack' }
    ];
    for (const divisor of priceDivisors) {
      if (divisor.value === value) {
        return divisor.label;
      }
    }
    return value;
  }
}
