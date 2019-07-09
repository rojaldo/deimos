import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Hero } from 'src/app/model/hero';

@Component({
  selector: 'app-heroes-form',
  templateUrl: './heroes-form.component.html',
  styleUrls: ['./heroes-form.component.scss']
})
export class HeroesFormComponent implements OnInit {

  newHero = new Hero();
  @Output() heroSignal = new EventEmitter<Hero>();

  constructor() { }

  ngOnInit() {
  }

  handleClick() {
    this.heroSignal.emit(this.newHero);
    this.newHero = new Hero();
  }

}
