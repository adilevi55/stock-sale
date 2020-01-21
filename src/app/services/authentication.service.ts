import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../modals/user';
import { AuthGuardService } from '../services/auth-guard';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class AuthenticationService {
    constructor(
        private http: HttpClient,
        private authGuardService: AuthGuardService,
        private route: Router
        ) { }

    register(user: User) {
         this.http.post<User>('https://test-node-app0.herokuapp.com/api/authentication/register', user)
            .subscribe(newUser => {
                console.log(newUser);
                this.authGuardService.userSingIn();
                alert('Register Success!');
                this.route.navigate(['/products-dashboard']);
            });
    }
    login(user: User) {
         this.http.post<User>('https://test-node-app0.herokuapp.com/api/authentication/login', user)
            .subscribe(newUser => {
                console.log(newUser);
                this.authGuardService.userSingIn();
                alert('Login Success!');
                this.route.navigate(['/products-dashboard']);
            });
    }
    loguot() {
        this.authGuardService.userLogout();
        this.route.navigate(['/login']);
    }
}
