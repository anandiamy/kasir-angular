import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'
import {LoginComponent} from './login/login.component'
import {Error404Component} from './error404/error404.component'
import {ProductComponent} from './product/product.component'


const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'login', component: LoginComponent},
    {path: 'product', component: ProductComponent},

    {path: '**', component: Error404Component}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
