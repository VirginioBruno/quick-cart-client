import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  constructor(private router: Router, private productService: ProductService, private cartService: CartService) {}

  products: Product[] = this.productService.getProducts();

  viewProduct(id: number) {
    this.router.navigate(['/product', id]);
  }

  addToCart(id: number) {
    let product = this.productService.findProductById(id);
    this.cartService.addProduct(product);
    alert("Product added");
  }

  viewCart() {
    this.router.navigate(['/cart']);
  }
}
