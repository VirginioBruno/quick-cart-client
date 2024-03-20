import { Component, OnDestroy } from '@angular/core';
import { CartService } from '../services/cart.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnDestroy {

  productsCount = 0;
  private subscription: Subscription = new Subscription();

  constructor(private router: Router, private cartService: CartService, private authService: AuthService) {
    this.subscription.add(this.cartService.cartProductsObservable.subscribe(cartProducts => {
      if (cartProducts) {
        this.productsCount = cartProducts.length;
      }
    }));
  }

  viewCart() {
    this.router.navigate(['/cart']);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
