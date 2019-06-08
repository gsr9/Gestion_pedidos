import { UserService } from './../../services/user.service';
import { Order } from './../../models/order.model';
import { Component, OnInit, SimpleChanges } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { filterQueryId } from '@angular/core/src/view/util';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  orders: Order[] = [];
  filteredOrders: Order[] = [];
  filters: string[] = [];
  user: User;

  confirmation = false;
  confirmationId = 0;

  constructor(private orderService: OrderService, private userService: UserService) {
  }

  ngOnInit() {
    console.log('ENTRO EN NG ON INIT')
    this.user = this.userService.getUser();
    this.getData();
  }

  // tslint:disable-next-line: use-life-cycle-interface
  ngDoCheck(): void {
    console.log('CAMBIOS: ');
    this.filteredOrders = this.filteredOrders.sort((a, b) => a.date < b.date ? 1 : -1);
  }

  getData() {
    this.orderService.getOrdersByUser(this.user.id).subscribe((data: Order[]) => {
      console.log(data)
      this.orders = data;
      this.filteredOrders = data;
    });
  }

  cancelOrderConfirmation(id: number) {
    this.confirmation = true;
    this.confirmationId = id;
  }
  cancelOrder() {
    this.orderService.cancelOrder(this.confirmationId).subscribe(data => {
      console.log('Resultado: ' + data);
      this.confirmation = false;
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

  closeModal() {
    this.confirmation = false;
  }
}
