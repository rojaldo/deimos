import { Component, OnInit, OnDestroy } from '@angular/core';
import { CalculatorService } from 'src/app/services/calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit, OnDestroy {

  display = '';

  constructor(private service: CalculatorService) { }

  ngOnInit() {
    this.display = this.service.calculator.display;
  }

  ngOnDestroy(): void {
  }

  handleSignal(myDisplay) {
    this.display = myDisplay;
  }


}
