import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.scss']
})
export class BeersComponent implements OnInit {

  result: any;
  beers: any[] = [];

  lowValue = 40;
  highValue = 60;
  options: Options = {
    floor: 0,
    ceil: 100,
    step: 0.5
  };

  constructor(private service: RequestService) { }

  ngOnInit() {
    this.service.getRequest().subscribe(
      (data) => this.processResult(data),
      (error) => this.processError(error)
    );
  }

  processResult(data: any) {
    this.result = data;
    this.beers = this.result;
  }

  processError(error: any) {
    console.error(error);
  }

  handleChange() {
    this.beers = [];
    for (const beer of this.result) {
      if (beer.abv >= this.lowValue && beer.abv <= this.highValue) {
        this.beers.push(beer);
      }
    }
  }

}
