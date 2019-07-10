import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss']
})
export class ApodComponent implements OnInit {

  date: any;
  dates: any[] = new Array<any>();

  constructor() { }

  ngOnInit() {
  }

  handleSelect() {
    this.dates.push(this.date);
  }

}
