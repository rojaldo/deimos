import { Injectable } from '@angular/core';
import { Calculator } from '../model/calculator';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  public calculator = new Calculator();

  constructor() { }
}
