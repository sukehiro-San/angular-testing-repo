import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appGrade]',
})
export class GradeDirective {
  constructor(private el:ElementRef) {}

  @HostListener('mouseenter', ['$event'])
  onMouseEnter(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (target.tagName === 'LI') {
      const cell = this.el.nativeElement;
      const grade = cell.innerText.trim();
      if (grade == 'A') {
        cell.style.color = 'green';
      } else if (grade == 'B') {
        cell.style.color = 'yellow';
      } else if (grade == 'C') {
        cell.style.color = 'orange';
      } else if (grade == 'D') {
        cell.style.color = 'orangered';
      } else {
        cell.style.color = 'red';
      }
    }
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave() {
    const target = this.el.nativeElement;
    if (target.tagName === 'LI') {
      const cell = target as HTMLTableCellElement;
      cell.style.color = 'black';
    }
  }
}
