import { Component } from '@angular/core';
import { OrderService } from '../services/order.service';
import { Order } from '../models/order';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent {

  orders: Order[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): any {
    this.orders = this.orderService.getOrders();
  }
}
