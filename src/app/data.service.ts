import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http:HttpClient) { }

  getUsers() {
    return this._http.get<any[]>('https://jsonplaceholder.typicode.com/users');
  }

  getUserById(id: number) {
    return this._http.get<any>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }

  updateUserById(id: number, user: any) {
    return this._http.put<any>(`https://jsonplaceholder.typicode.com/users/${id}`, user);
  }
}
