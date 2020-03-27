import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'

import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {LoginComponent} from './login/login.component'
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { Error404Component } from './error404/error404.component'
import {ModalModule} from 'ngx-bootstrap'

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        ProductComponent,
        CartComponent,
        Error404Component
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ModalModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
