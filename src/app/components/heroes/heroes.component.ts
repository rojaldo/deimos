import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroName = '';
  heroes = ['Spiderman', 'Superman', 'Batman'];

  constructor() { }

  ngOnInit() {
  }

  handleClick() {
    this.heroes.push(this.heroName);
    this.heroName = '';
  }

}
