import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Grade'
})
export class GradePipe implements PipeTransform {

  transform(value: number): unknown {
    if (value >= 90) {
      return 'A';
    } else if (value >= 80) {
      return 'B';
    } else if (value >= 70) {
      return 'C';
    } else if (value >= 60) {
      return 'D';
    } else {
      return 'Fail';
    }
  }

}
