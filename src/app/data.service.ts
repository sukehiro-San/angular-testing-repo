import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http:HttpClient) { }

  getUsers() {
    return this._http.get<{name:string}[]>('https://jsonplaceholder.typicode.com/users');
  }

  getUserById(id: number) {
    return this._http.get<{name:string}>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }

  updateUserById(id: number, user: {name:string}) {
    return this._http.put<{name:string}>(`https://jsonplaceholder.typicode.com/users/${id}`, user);
  }
}
