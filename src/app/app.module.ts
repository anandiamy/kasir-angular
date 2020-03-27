import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'

import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {LoginComponent} from './login/login.component'
import {MaterialModule} from './core/material.module'
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { Error404Component } from './error404/error404.component'
import {MatListModule} from '@angular/material/list'

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
        BrowserAnimationsModule,
        MaterialModule,
        HttpClientModule,
        FormsModule,
        MatListModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
