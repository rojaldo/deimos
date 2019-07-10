import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss']
})
export class ApodComponent implements OnInit {

  result: any;
  responded = false;
  date: any;

  constructor(private service: RequestService) { }

  ngOnInit() {
    const apiKey = 'DEMO_KEY';
    const url = 'https://api.nasa.gov/planetary/apod?api_key=' + apiKey + '&date=2019-07-09';
    this.service.getRequest(url).subscribe((data) => this.processData(data));
  }

  processData(data: any) {
    this.result = data;
    this.responded = true;
  }

  handleSelect() {
    const apiKey = 'DEMO_KEY';
    const url = 'https://api.nasa.gov/planetary/apod?api_key='
      + apiKey +
      '&date=' + this.date.year + '-' + this.date.month + '-' + this.date.day;
    this.service.getRequest(url).subscribe((data) => this.processData(data));
  }

}
