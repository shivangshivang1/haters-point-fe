import { Observable } from 'rxjs';
import { User } from './../models/User.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  signUp(user: User): Observable<any> {
    let url = 'http://localhost:8080/sign-up';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token',
      }),
    };
    let body = JSON.stringify(user);

    return this.http.post(url, body, httpOptions);
  }
}
