import { Order } from './../../models/order.model';
import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  orders: Order[] = [];

  constructor(private orderService: OrderService) {
   }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.orderService.getOrders().subscribe((data: Order[]) => {
      this.orders = data;
      console.log(data);
    });
  }

  cancelOrder(id: number){
    this.orderService.cancelOrder(id).subscribe(data => {
      console.log('Resultado: ' + data);
      this.getData();
    });
  }

  payOrder(id: number){
    this.orderService.payOrder(id).subscribe(data => {
      console.log('Resultado: ' + data);
      this.getData();
    });
  }

}
