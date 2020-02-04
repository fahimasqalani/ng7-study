import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://reqres.in/api/users')
  }

// get data from reqres api
  getAngular(){
    return this.http.get('https://reqres.in/api/users?delay=3')
  }
}
