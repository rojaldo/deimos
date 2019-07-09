import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  newHero = { name: '', description: '' };

  heroes = [{ name: 'Spiderman', description: 'Spidy' },
  { name: 'Superman', description: 'man of steel' },
  { name: 'Batman', description: 'Dark Knight' }];

  constructor() { }

  ngOnInit() {
  }

  handleClick() {
    this.heroes.push(this.newHero);
    this.newHero = { name: '', description: '' };
  }

}
