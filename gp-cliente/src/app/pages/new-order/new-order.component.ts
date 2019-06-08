import { UserService } from './../../services/user.service';
import { PlateService } from './../../services/plate.service';
import { Component, OnInit } from '@angular/core';
import { Plate } from 'src/app/models/plate.model';
import { FormBuilder, Validators } from '@angular/forms';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/models/order.model';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})
export class NewOrderComponent implements OnInit {

  step = 1;
  firstPlates: Plate[] = [];
  secondPlates: Plate[] = [];
  desserts: Plate[] = [];
  user: User;

  types = ['Primero', 'Segundo', 'Postre'];

  firstSelected: string = null;
  secondSelected: string = null;
  dessertSelected: string = null;

  modalOpen = false;
  price = 0;
  orderSuccess = false;

  addPlateForm = this.fb.group({ 'plateToAdd': ['', Validators.required] });

  constructor(
    private plateService: PlateService,
    private fb: FormBuilder,
    private orderService: OrderService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.plateService.getPlates().subscribe((plates: Plate[]) => {
      this.firstPlates = plates.filter(plate => plate.type === 'Primero');
      this.secondPlates = plates.filter(plate => plate.type === 'Segundo');
      this.desserts = plates.filter(plate => plate.type === 'Postre');
    });
    this.user = this.userService.getUser();
  }

  setStep(n: number) {
    this.step = n;
  }

  isPlateSelected(plate: Plate) {
    if (plate.type === 'Primero') {
      return plate.name === this.firstSelected ? 'is-info' : '';
    } else if (plate.type === 'Segundo') {
      return plate.name === this.secondSelected ? 'is-info' : '';
    } else {
      return plate.name === this.dessertSelected ? 'is-info' : '';
    }
  }

  selectPlate(plate: Plate) {
    if (plate.type === 'Primero') {
      plate.name === this.firstSelected ? this.firstSelected = null : this.firstSelected = plate.name;
    } else if (plate.type === 'Segundo') {
      plate.name === this.secondSelected ? this.secondSelected = null : this.secondSelected = plate.name;
    } else {
      plate.name === this.dessertSelected ? this.dessertSelected = null : this.dessertSelected = plate.name;
    }
  }

  showModal() {
    if (this.modalOpen) {
      return 'is-active';
    }
    return '';
  }

  openModal() {
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
  }

  openModalExternal() {
    this.openModal();
  }

  savePlate() {
    console.log(this.addPlateForm.controls.plateToAdd.value);
    const plate: Plate = new Plate();
    plate.name = this.addPlateForm.controls.plateToAdd.value;
    plate.type = this.types[this.step - 1];

    this.plateService.addPlate(plate).subscribe(data => {
      if (this.step === 1) {
        this.firstPlates.push(plate);
      } else if (this.step === 2) {
        this.secondPlates.push(plate);
      } else {
        this.desserts.push(plate);
      }
      this.closeModal();
    });
  }

  saveOrder() {
    const order: Order = new Order();
    order.firstPlate = this.firstSelected;
    order.secondPlate = this.secondSelected;
    order.dessert = this.dessertSelected;
    order.date = new Date();
    order.user = this.user;
    this.orderService.addOrder(order).subscribe(data => {
      this.orderSuccess = true;
    });
  }

  stepBack() {
    if (this.step > 1) {
      this.step--;
    }
  }

  stepNext() {
    if (this.step < 4) {
      this.step++;
    }
  }

  noneSelected() {
    if (this.firstSelected == null && this.secondSelected == null && this.dessertSelected == null) {
      return true;
    }
    return false;
  }

  getPrice() {
    this.price = 0;
    if (this.firstSelected && this.secondSelected && this.dessertSelected) {
      return 9;
    }
    if (this.firstSelected !== null) {
      this.price += 3;
    }
    if (this.secondSelected !== null) {
      this.price += 4;
    }
    if (this.dessertSelected !== null) {
      this.price += 3;
    }
    return this.price;
  }

  getAvailable() {
    const date = new Date();
    if (date.getHours() < 11) {
      return 'hoy';
    }
    return 'mañana';
  }
}
