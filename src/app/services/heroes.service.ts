import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';

@Injectable()
export class HeroesService {

  heroes = [new Hero('Spiderman', 'Spidy'),
  new Hero('Superman', 'man of steel'),
  new Hero('Batman', 'Dark Knight')];

  constructor() { }
}
