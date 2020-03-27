import {Component, Input, OnInit, Output, TemplateRef} from '@angular/core'
import {Cart} from '../model/cart.model'
import {BsModalRef, BsModalService} from 'ngx-bootstrap'

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    @Input() cart: Cart[] = []

    modalRef: BsModalRef

    constructor(private modalService: BsModalService) {
    }

    ngOnInit(): void {
    }

    addCount(name: string) {
        const index = this.cart.findIndex(cart => cart.name === name)
        this.cart[index].count += 1
    }

    reduceCount(name: string) {
        const index = this.cart.findIndex(cart => cart.name === name)
        this.cart[index].count -= 1
    }

    remove(name: string) {
        const index = this.cart.findIndex(cart => cart.name === name)
        this.cart.splice(index, 1)
    }

    get total() {
        let total = 0
        for (const item of this.cart) {
            total += item.count * item.price
        }

        return total
    }

    checkout(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template)
    }

    paymentBtn() {
        alert('Payment sedang dicetak, silahkan ditunggu')
    }
}
