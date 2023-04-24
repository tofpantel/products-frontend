import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs';
import { UserAPIList } from 'dist/shared/lib/user.interfaces';

const USER_API = 'https://codingfactory.ddns.net/api/user'

// It can be injected in the component, but in this case the scope is within user scope
// this is not a global service
// so remove root
@Injectable(
  // {providedIn: 'root'}
)
export class UserService {

  constructor(private http: HttpClient) { }

  // get from the findall endpoint
  findAll(){
    // we have to perform a typecast
    return this.http.get<UserAPIList>(`${USER_API}/findall`).pipe(delay(1000))
  }
}
