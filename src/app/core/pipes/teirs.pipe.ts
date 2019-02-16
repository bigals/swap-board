import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'teirs'
})
export class TeirsPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    const teirs = [
      { value: 1, label: 'Teir 1' },
      { value: 2, label: 'Teir 2' },
      { value: 3, label: 'Teir 3' }
    ];
    for (const teir of teirs) {
      if (teir.value === value) {
        return teir.label;
      }
    }
    return value;
  }
}
