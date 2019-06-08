import { PlateService } from './../../services/plate.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewOrderComponent } from './new-order.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StepsComponent } from './components/steps/steps.component';

const routes: Routes = [
  {
    path: '',
    component: NewOrderComponent
  }
];

@NgModule({
  declarations: [
    NewOrderComponent,
    StepsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  providers: [PlateService]
})
export class NewOrderModule { }
