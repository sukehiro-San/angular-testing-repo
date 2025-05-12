import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ang-test';
  studentMarks = [
    { name: 'Alice', marks: 85 },
    { name: 'Bob', marks: 78 },
    { name: 'Charlie', marks: 92 },
    { name: 'Diana', marks: 67 },
    { name: 'Ethan', marks: 74 },
    { name: 'Fiona', marks: 88 },
    { name: 'George', marks: 95 },
    { name: 'Hannah', marks: 81 },
    { name: 'Ian', marks: 53 },
    { name: 'Julia', marks: 69 }
  ];
}
