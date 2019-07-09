import { Component, OnInit, OnDestroy } from '@angular/core';
import { Hero } from 'src/app/model/hero';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit, OnDestroy {

  newHero = new Hero();

  heroes: Hero[] = [];

  constructor(public service: HeroesService) { }

  ngOnInit() {
    console.log('OnInit: heroes');
  }
  ngOnDestroy(): void {
    console.log('OnDestroy: heroes');
  }

  addHero(hero) {
    this.heroes.push(hero);
  }


}
