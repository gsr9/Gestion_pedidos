import { PlateService } from './../../services/plate.service';
import { Component, OnInit } from '@angular/core';
import { Plate } from 'src/app/models/plate.model';
import { FormBuilder, Validators } from '@angular/forms';

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

  types = ['Primero', 'Segundo', 'Postre'];

  firstSelected = '';
  secondSelected = '';
  dessertSelected = '';

  modalOpen = false;

  addPlateForm = this.fb.group({ 'plateToAdd': ['', Validators.required] });

  constructor(private plateService: PlateService, private fb: FormBuilder) { }

  ngOnInit() {
    this.plateService.getPlates().subscribe((plates: Plate[]) => {
      this.firstPlates = plates.filter(plate => plate.type === 'Primero');
      this.secondPlates = plates.filter(plate => plate.type === 'Segundo');
      this.desserts = plates.filter(plate => plate.type === 'Postre');
    });
  }

  checkStep(n: number) {
    if (n === this.step) {
      return 'is-active';
    }
    return '';
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

  savePlate() {
    console.log(this.addPlateForm.controls.plateToAdd.value);
    let plate: Plate = new Plate();
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
}
