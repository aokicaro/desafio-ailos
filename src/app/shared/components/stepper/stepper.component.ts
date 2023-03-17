import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {
  @Input() steps: string[] = [];
  @Input() activeStep: number = 0;
  @Output() stepChanged = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  goToStep(index: number): void {
    if (index >= 0 && index < this.steps.length) {
      this.activeStep = index;
      this.stepChanged.emit(this.activeStep);
    }
  }
}