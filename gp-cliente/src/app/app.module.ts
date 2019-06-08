import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuardService } from './services/auth-guard.service';

const routes = [
  //{ path: '', loadChildren: './pages/my-orders/my-orders.module#MyOrdersModule' },
  { path: '', loadChildren: './pages/login/login.module#LoginModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginModule' },
  { path: 'registro', loadChildren: './pages/register/register.module#RegisterModule' },
  { path: 'mispedidos', loadChildren: './pages/my-orders/my-orders.module#MyOrdersModule', canActivate: [AuthGuardService] },
  { path: 'nuevopedido', loadChildren: './pages/new-order/new-order.module#NewOrderModule', canActivate: [AuthGuardService] }
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
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
