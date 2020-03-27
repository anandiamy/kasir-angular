import {Component, OnInit} from '@angular/core'
import {RestService} from '../service/rest.service'
import {Product} from '../model/product.model'
import {ProductService} from '../service/product.service'

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

    productList: Product[]

    constructor(private productService: ProductService) {
    }

    ngOnInit(): void {
        this.productService.getAll().subscribe(data => this.productList = data)
    }
}
