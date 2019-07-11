import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  public model: any;
  result: any;
  countries: string[] = [];

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.countries.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )
  constructor(private service: RequestService) { }

  ngOnInit() {
    this.service.getRequest('https://restcountries.eu/rest/v2/all').subscribe((data) => this.processData(data));
  }

  processData(data: any) {
    this.result = data;
    for (const country of this.result) {
      this.countries.push(country.name);
    }
  }

}
