import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { OrderService } from '../services/order.service';
import { Router } from '@angular/router';
import { Cart } from '../models/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  cart: Cart | null = null;
  
  constructor(private cartService: CartService, private orderService: OrderService, private route: Router) {}

  ngOnInit(): any {
    this.getCart();
  }

  getCart() {
    this.cart = this.cartService.getCart();
  }

  createOrder() {
    this.orderService.createOrder(this.cart!);
    this.route.navigate(['/orders']);
  }
}
