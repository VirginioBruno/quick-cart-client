import { Injectable } from '@angular/core';
import { Cart } from '../models/cart';
import { Order } from '../models/order';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orders: Order[] = [];

  constructor(private cartService: CartService) { }

  createOrder(cart: Cart): Order {
    const order = {
      customerId: cart.customerId,
      price: cart.price,
      products: cart.products,
      status: "Processing"
    };

    this.orders.push(order);
    this.cartService.clearCart();

    return order;
  }

  getOrders(): Order[] {
    return this.orders;
  }
}
