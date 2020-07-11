import { Injectable } from '@angular/core';
import { IUser } from 'src/app/interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private _sessionUser: IUser;

  constructor() {
    if (sessionStorage.user) {
      this._sessionUser = JSON.parse(sessionStorage.user);
    }
  }

  set sessionUser(user: IUser) {
    this._sessionUser = user;
    sessionStorage.setItem('user', JSON.stringify(user));
  }

  get sessionUser() {
    return this._sessionUser;
  }

  logout() {
    this.sessionUser = null;
    sessionStorage.clear();
  }
}
