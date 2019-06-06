import { OrderService } from './services/order.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MyOrdersModule } from './pages/my-orders/my-orders.module';
import { HttpClientModule } from '@angular/common/http';

const routes = [
  { path: '', loadChildren: './pages/my-orders/my-orders.module#MyOrdersModule' },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MyOrdersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
