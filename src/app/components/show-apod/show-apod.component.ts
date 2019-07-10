import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-show-apod',
  templateUrl: './show-apod.component.html',
  styleUrls: ['./show-apod.component.scss']
})
export class ShowApodComponent implements OnInit, OnChanges {

  result: any;
  responded = false;
  @Input() date: any;

  constructor(private service: RequestService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const apiKey = 'tqz634Z1x0LiJzjbhSyUoExrZaGKLM0MG1VnROR6';
    const url = 'https://api.nasa.gov/planetary/apod?api_key='
      + apiKey +
      '&date=' + this.date.year + '-' + this.date.month + '-' + this.date.day;
    this.service.getRequest(url).subscribe((data) => this.processData(data));

  }

  processData(data: any) {
    this.result = data;
    this.responded = true;
  }


}
