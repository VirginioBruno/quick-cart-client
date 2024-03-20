import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Cart } from '../models/cart';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: Cart = {
    id: 0,
    price: 0,
    products: [],
    customerId: ''
  };

  private cartProducts = new BehaviorSubject<Product[]>([]);
  cartProductsObservable = this.cartProducts.asObservable();

  constructor() { }

  getCart(): Cart {
    this.cart.id = 1;
    this.cart.customerId = localStorage.getItem('customerId')!;
    return this.cart;
  }

  addProduct(product: Product) {
    this.cart.products.push(product);
    this.cart.price = this.cart.products.reduce((accumulator, currentProduct) => accumulator + currentProduct.price, 0);
    this.cartProducts.next(this.cart.products);
  }

  clearCart() {
    this.cart = {
      id: 0,
      price: 0,
      products: [],
      customerId: ''
    };

    this.cartProducts.next(this.cart.products);
  }
}
