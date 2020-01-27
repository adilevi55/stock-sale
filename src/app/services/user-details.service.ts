import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../modals/user';
import { Observable } from 'rxjs';
import { UserNoPasswordEmail } from '../modals/user-no-password-email';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor(private http: HttpClient) { }

  userUpdateDetails(user: UserNoPasswordEmail): Observable<User> {
    return this.http.put<User>('https://test-node-app0.herokuapp.com/api/user/details', user);
  }
}
