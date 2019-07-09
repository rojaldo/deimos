import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/model/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  newHero = new Hero();

  heroes = [new Hero('Spiderman', 'Spidy'),
  new Hero('Superman', 'man of steel'),
  new Hero('Batman', 'Dark Knight')];

  constructor() { }

  ngOnInit() {
  }

  addHero(hero) {
    this.heroes.push(hero);
  }


}
