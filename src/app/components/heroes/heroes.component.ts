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

  constructor(private service: HeroesService) { }

  ngOnInit() {
    console.log('OnInit: heroes');
    this.heroes = this.service.heroes;
  }
  ngOnDestroy(): void {
    console.log('OnDestroy: heroes');
    this.service.heroes = this.heroes;
  }

  addHero(hero) {
    this.heroes.push(hero);
  }


}
