import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { 
    console.log('Http called')
  }

  sharedFunction() {
    console.log('This is a shared function');
  }
}
