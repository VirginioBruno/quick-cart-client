import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    { id: 1, name: 'Product 1', description: 'This is product 1', price: 100, image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1200", alt: "This is product 1'" },
    { id: 2, name: 'Product 2', description: 'This is product 2', price: 200, image: "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1200", alt: "This is product 2'" },
    { id: 3, name: 'Product 3', description: 'This is product 3', price: 300, image: "https://images.pexels.com/photos/15503344/pexels-photo-15503344/free-photo-of-pink-nintendo-switch-lite-game-console.jpeg?auto=compress&cs=tinysrgb&w=1200", alt: "This is product 3'" },
  ];

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }

  findProductById(id: Number): Product {
    return this.products.find(x => x.id === id)!;
  }
}
