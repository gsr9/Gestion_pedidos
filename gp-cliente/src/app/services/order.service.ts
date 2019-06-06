import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { debug } from 'util';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) {   }

  getOrders() {
    return this.http.get('http://localhost:8080/orders');
  }

  cancelOrder(id: number){
    return this.http.post(`http://localhost:8080/orders/${id}/cancel`, '');
  }

  payOrder(id: number) {
    return this.http.post(`http://localhost:8080/orders/${id}/pay`, '');
  }
}
