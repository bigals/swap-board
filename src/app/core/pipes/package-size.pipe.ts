import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'packageSize'
})
export class PackageSizePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    const packageSizes = [
      { value: 8.4, label: '8.4 oz Can' },
      { value: 12, label: '12 oz Bottle/Can' },
      { value: 16, label: '16 oz Can' },
      { value: 19.2, label: '19.2 oz Can' },
      { value: 22, label: '22 oz Bomber' },
      { value: 25.3605, label: '750ml Bottle' }
    ];

    for (const size of packageSizes) {
      if (size.value === value) {
        return size.label;
      }
    }
    return value;
  }
}
