import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  getRequest(url: string = 'https://api.punkapi.com/v2/beers'){
    return this.http.get(url);
  }
}
