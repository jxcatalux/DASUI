import { Injectable } from '@angular/core';
import { CanActivate, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from 'src/app/services/session/session.service';

@Injectable({
  providedIn: 'root',
})
export class LoginRedirectGuard implements CanActivate {
  constructor(public router: Router, private sessionService: SessionService) {}

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.sessionService.sessionUser) {
      this.router.navigate([`search`]);
      return false;
    }
    return true;
  }
}
