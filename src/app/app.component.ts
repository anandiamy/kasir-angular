import {Component} from '@angular/core'
import {AuthService} from './service/auth.service'
import {Router} from '@angular/router'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'kasir-angular'

    constructor(private authService: AuthService, private router: Router) {
    }

    isLogin() {
        return this.authService.isLogin()
    }

    login() {
        this.router.navigate([''])
    }

    logout() {
      this.authService.logout()

      this.router.navigate([''])
    }
}
