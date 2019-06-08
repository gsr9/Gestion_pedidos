import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css']
})
export class StepsComponent implements OnInit {

  @Input()
  step: number;

  @Output()
  setStepEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  checkStep(n: number) {
    if (n === this.step) {
      return 'is-active';
    }
    return '';
  }

  setStep(n: number) {
    this.step = n;
    this.setStepEvent.emit(n);
  }

}
