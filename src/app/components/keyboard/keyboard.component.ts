import { Component, OnInit, Output, EventEmitter } from '@angular/core';

enum State { init, firstFigure, secondFigure, result }

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit {

  display = '';
  currentState = State.init;
  firstFigure = 0;
  secondFigure = 0;
  result = 0;
  operator = '';

  @Output() signal = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }
  handleNumber(myNumber: number) {
    console.log('HandleNumber: ' + myNumber);

    switch (this.currentState) {
      case State.init:
        this.firstFigure = myNumber;
        this.display += myNumber;
        this.signal.emit(this.display);
        this.currentState = State.firstFigure;
        break;
      case State.firstFigure:
        this.firstFigure = this.firstFigure * 10 + myNumber;
        this.display += myNumber;
        this.signal.emit(this.display);
        break;
      case State.secondFigure:
        this.secondFigure = this.secondFigure * 10 + myNumber;
        this.display += myNumber;
        this.signal.emit(this.display);
        break;
      case State.result:
        this.firstFigure = myNumber;
        this.secondFigure = 0;
        this.result = 0;
        this.operator = '';
        this.display = '' + myNumber;
        this.signal.emit(this.display);
        this.currentState = State.firstFigure;
        break;
      default:
        break;
    }
  }

  handleSymbol(symbol: string) {
    switch (this.currentState) {
      case State.firstFigure:
        if (this.isOperator(symbol)) {
          this.operator = symbol;
          this.display += symbol;
          this.signal.emit(this.display);
          this.currentState = State.secondFigure;
        }
        break;
      case State.secondFigure:
        if (symbol === '=') {
          this.result = this.resolve();
          this.display = this.display + '=' + this.result;
          this.signal.emit(this.display);
          this.currentState = State.result;
        }
        break;
      case State.result:
        this.firstFigure = this.result;
        this.secondFigure = 0;
        this.result = 0;
        this.operator = symbol;
        this.display = this.firstFigure + this.operator;
        this.signal.emit(this.display);
        this.currentState = State.secondFigure;
        break;
      default:
        break;
    }
  }

  resolve() {
    switch (this.operator) {
      case '*':
        return this.firstFigure * this.secondFigure;
        break;
      case '/':
        return this.firstFigure / this.secondFigure;
        break;
      case '-':
        return this.firstFigure - this.secondFigure;
        break;
      case '+':
        return this.firstFigure + this.secondFigure;
        break;
      default:
        break;
    }
  }

  isOperator(symbol: string): boolean {
    if (symbol === '/' || symbol === '*' || symbol === '-' || symbol === '+') {
      return true;
    } else {
      return false;
    }
  }

}
