import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getUserData(userId: number) {
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
  }
}
