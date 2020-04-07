import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {HttpHeaders } from '@angular/common/http';
import { UserModel } from '../models/User.model';


@Injectable()
export class UserService{


    constructor(private http: HttpClient){}

    signUp(user: UserModel): Observable<any>{
        let url ="http://localhost:8080//sign-up"
        const httpOptions = {
           headers: new HttpHeaders({
            'Content-Type':'application/json',
            'Authorization':'my-auth-token'
           })
        };
    }
   

}