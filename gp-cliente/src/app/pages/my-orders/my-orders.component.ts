import { Order } from './../../models/order.model';
import { Component, OnInit, SimpleChanges } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { filterQueryId } from '@angular/core/src/view/util';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  orders: Order[] = [];
  filteredOrders: Order[] = [];
  filters: string[] = [];

  constructor(private orderService: OrderService) {
  }

  ngOnInit() {
    console.log('ENTRO EN NG ON INIT')
    this.getData();
  }

// tslint:disable-next-line: use-life-cycle-interface
  ngDoCheck(): void {
    console.log('CAMBIOS: ');
    this.filteredOrders = this.filteredOrders.sort((a, b) => a.date < b.date ? 1 : -1);
  }

  getData() {
    this.orderService.getOrders().subscribe((data: Order[]) => {
      this.orders = data;
      this.filteredOrders = data;
    });
  }

  cancelOrder(id: number) {
    this.orderService.cancelOrder(id).subscribe(data => {
      console.log('Resultado: ' + data);
      this.getData();
    });
  }

  payOrder(id: number) {
    this.orderService.payOrder(id).subscribe(data => {
      console.log('Resultado: ' + data);
      this.getData();
    });
  }

  filter(state: string) {
    if (this.filters.includes(state)) {
      this.filteredOrders = this.filteredOrders.concat(this.orders.filter((order: Order) => order.state === state));
      this.filters.splice(this.filters.indexOf(state), 1);
    } else {
      this.filteredOrders = this.filteredOrders.filter((order: Order) => order.state !== state);
      this.filters.push(state);
    }
  }

  switch(state: any) {
    if (this.filters.includes(state)) {
      return ['has-background-grey-dark', 'has-text-white'];
    } else {
      return '';
    }
  }

}
