import { OrderService } from './services/order.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MyOrdersModule } from './pages/my-orders/my-orders.module';
import { HttpClientModule } from '@angular/common/http';
import { NewOrderModule } from './pages/new-order/new-order.module';

const routes = [
  { path: '', loadChildren: './pages/my-orders/my-orders.module#MyOrdersModule' },
  { path: 'mispedidos', loadChildren: './pages/my-orders/my-orders.module#MyOrdersModule' },
  { path: 'nuevopedido', loadChildren: './pages/new-order/new-order.module#NewOrderModule'},
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
