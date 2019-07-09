import { Component, OnInit, Input } from '@angular/core';
import { Hero } from 'src/app/model/hero';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent implements OnInit {

  @Input() heroes: Hero[];

  constructor() { }

  ngOnInit() {
  }

  removeHero(heroIndex: number) {
    this.heroes.splice(heroIndex, 1);
  }

}
