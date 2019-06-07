import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { debug } from 'util';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  url = 'http://localhost:8080/orders/';

  constructor(private http: HttpClient) { }

  getOrders() {
    return this.http.get(this.url);
  }

  cancelOrder(id: number) {
    return this.http.post(this.url + `${id}/cancel`, '');
  }

  payOrder(id: number) {
    return this.http.post(this.url + `${id}/pay`, '');
  }

  addOrder(order: Order) {
    return this.http.post(this.url, order);
  }
}
