import {Component, OnInit} from '@angular/core'
import {AuthService} from '../service/auth.service'
import {Router} from '@angular/router'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    username: string
    password: string
    showSpinner: boolean

    constructor(private authService: AuthService, private router: Router) {
        this.showSpinner = false
    }

    ngOnInit(): void {
    }

    login() {
        const login = this.authService.login(this.username, this.password)
        if (login) {
            this.router.navigate(['product'])
            return
        }

        alert('username dan password yang anda masukkan salah')
        return
    }
}
