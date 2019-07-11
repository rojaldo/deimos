import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { Options } from 'ng5-slider';
import { Observable } from 'rxjs';

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
  altResult: Observable<any>;

  constructor(private service: RequestService) { }

  ngOnInit() {
    this.altResult = this.service.getRequest();
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
    this.beers = this.result.filter((beer) => beer.abv >= this.lowValue && beer.abv <= this.highValue);
  }

}
