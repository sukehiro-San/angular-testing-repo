import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  constructor(private _shared:SharedService) { }

  multiply(a: number, b: number): number {
    this._shared.sharedFunction();
    return a * b;
  }

  add(a: number, b: number): number {
    // this._shared.sharedFunction();
    return a + b;
  }
}
