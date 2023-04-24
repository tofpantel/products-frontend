import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'projects/shared/src/public-api';

import { BehaviorSubject } from 'rxjs';
import { UserAPIUserOne } from 'projects/shared/src/public-api';

const USER_API = 'https://codingfactory.ddns.net/api/user'

@Injectable({
  providedIn: 'root'
})
export class AppService {
  // It's an observable
  private loggedInSubject = new BehaviorSubject<boolean>(false)
  isloggedIn$ = this.loggedInSubject.asObservable();
  constructor(private http:HttpClient) { }

  login(username: string, password:string){
    this.http
    .get<UserAPIUserOne>(`${USER_API}/findone/${username}`)
    .subscribe((user) => {
      this.loggedInSubject.next(user.data.password === password)})
  }
}
