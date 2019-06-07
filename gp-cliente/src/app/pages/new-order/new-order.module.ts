import { PlateService } from './../../services/plate.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewOrderComponent } from './new-order.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FirstPlateComponent } from './components/first-plate/first-plate.component';
import { SecondPlateComponent } from './components/second-plate/second-plate.component';
import { DessertComponent } from './components/dessert/dessert.component';
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
    FirstPlateComponent,
    SecondPlateComponent,
    DessertComponent,
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
