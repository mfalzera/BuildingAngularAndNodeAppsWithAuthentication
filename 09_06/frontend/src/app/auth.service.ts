import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

    BASE_URL = 'http://localhost:58630/auth';
    NAME_KEY = 'name';
    TOKEN_KEY = 'token'

    constructor(private http: Http, private router: Router) {}

    get name() {
        return localStorage.getItem(this.NAME_KEY);
    }

    get isAuthenticated() {
        return !!localStorage.getItem(this.TOKEN_KEY);
    }

    register(user) {
        delete user.confirmPassword;
        this.http.post(this.BASE_URL + '/register', user).subscribe(res => {
            
            var authResponse = res.json();

            if(!authResponse.token)
                return;

            localStorage.setItem(this.TOKEN_KEY, authResponse.token)
            localStorage.setItem(this.NAME_KEY, authResponse.firstName)
            this.router.navigate(['/']);
        });
    }

}