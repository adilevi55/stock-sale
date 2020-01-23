import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../modals/user';
import { AuthGuardService } from './auth-guard.service';
import { Router } from '@angular/router';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class AuthenticationService {
    constructor(
        private http: HttpClient,
        private authGuardService: AuthGuardService,
        private route: Router
        ) { }
        public user$: BehaviorSubject<User> = new BehaviorSubject({});
        public user: User;
    getUser(): Observable<User> {
        return this.user$;
    }

    register(user: User) {
         this.http.post<User>('https://test-node-app0.herokuapp.com/api/authentication/register', user)
            .subscribe(newUser => {
                console.log(newUser);
                this.user$.next(newUser);
                this.user = newUser;
                this.authGuardService.userSingIn();
                alert('Register Success!');
                this.route.navigate(['/products/all-products']);
            });
    }
    login(user: User) {
         this.http.post<User>('https://test-node-app0.herokuapp.com/api/authentication/login', user)
            .subscribe(newUser => {
                console.log(newUser);
                this.user$.next(newUser);
                this.user = newUser;
                this.authGuardService.userSingIn();
                alert('Login Success!');
                this.route.navigate(['/products/all-products']);
            });
    }
    loguot() {
        this.authGuardService.userLogout();
        this.route.navigate(['/login']);
    }
}
