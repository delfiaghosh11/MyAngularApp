import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { removeSummaryDuplicates } from '@angular/compiler';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  operation: string;
  result;

  constructor() {}

  ngOnInit(): void {}

  form = new FormGroup({
    input1: new FormControl('', Validators.required),
    input2: new FormControl('', Validators.required),
  });

  get input1() {
    return this.form.get('input1');
  }

  get input2() {
    return this.form.get('input2');
  }

  submit(form) {
    console.log('Submitted', form);
  }

  add() {
    this.operation = ' of Addition';
    this.result = this.input1.value + this.input2.value;
  }

  sub() {
    this.operation = ' of Subtraction';
    this.result = this.input1.value - this.input2.value;
  }

  mul() {
    this.operation = ' of Multiplication';
    this.result = this.input1.value * this.input2.value;
  }

  div() {
    this.operation = ' of Division';
    this.result = this.input1.value / this.input2.value;
  }
}
