import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
    public authorization: boolean;
    public authorization$: Subject<boolean> = new Subject();

  constructor(private router: Router) {
  }
  checkLogin(): Observable<boolean> {
      return this.authorization$;
  }
  userSingIn() {
      this.authorization = true;
      this.authorization$.next(true);
  }
  userLogout() {
      this.authorization = false;
      this.authorization$.next(false);
  }

  canActivate(): boolean {
    if (this.authorization === true) {
        return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
