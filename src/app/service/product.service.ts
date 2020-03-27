import {Injectable} from '@angular/core'
import {RestService} from './rest.service'
import {HttpClient} from '@angular/common/http'
import {Product} from '../model/product.model'
import {catchError} from 'rxjs/operators'
import {of} from 'rxjs'

@Injectable({
    providedIn: 'root'
})
export class ProductService extends RestService {

    getAll() {
        return this.http.get<Product[]>(this.baseUrl + '/product')
            .pipe(
                catchError(error => {
                    console.log(error.message)
                    return of(null)
                })
            )
    }
}
