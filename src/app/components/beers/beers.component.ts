import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.scss']
})
export class BeersComponent implements OnInit {

  result: any;

  constructor(private service: RequestService) { }

  ngOnInit() {
    this.service.getRequest().subscribe(
      (data) => this.processResult(data),
      (error) => this.processError(error)
    );
  }

  processResult(data: any) {
    this.result = data;
  }

  processError(error: any) {
    console.error(error);
  }

}
