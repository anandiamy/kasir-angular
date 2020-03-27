import {Component, OnInit} from '@angular/core'
import {RestService} from '../service/rest.service'
import {Product} from '../model/product.model'
import {ProductService} from '../service/product.service'
import {Cart} from '../model/cart.model'

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

    productList: Product[]
    cart: Cart[] = []

    constructor(private productService: ProductService) {
    }

    ngOnInit(): void {
        this.productService.getAll().subscribe(data => this.productList = data)
    }

    addToCart(name: string, price: number) {
        const index = this.cart.findIndex(cart => cart.name === name)

        if (index > -1) {
            this.cart[index].count += 1
        } else {
            this.cart.push({
                name,
                count: 1,
                price
            })
        }
    }
}
