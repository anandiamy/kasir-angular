import {Injectable} from '@angular/core'
import {CookieService} from 'ngx-cookie-service'
import {Router} from '@angular/router'

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private cookie: CookieService, private router: Router) {
    }

    login(username, password): boolean {
        if (username === 'anan' && password === 'asdf1234') {
            this.cookie.set('token', 'aaaa')

            return true
        }

        return false
    }

    logout() {
        this.cookie.delete('token')
        this.router.navigate([''])
    }

    isLogin() {
        return this.cookie.get('token')
    }
}
