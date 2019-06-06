import { MyOrdersComponent } from './my-orders.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';

const routes: Routes = [
  {
    path: '',
    component: MyOrdersComponent
  }
];
@NgModule({
  declarations: [
    MyOrdersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [OrderService]
})
export class MyOrdersModule { }
