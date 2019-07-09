import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { DisplayComponent } from './components/display/display.component';
import { KeyboardComponent } from './components/keyboard/keyboard.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HeroesComponent } from './components/heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { HeroesFormComponent } from './components/heroes-form/heroes-form.component';
import { HeroesService } from './services/heroes.service';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    DisplayComponent,
    KeyboardComponent,
    HeroesComponent,
    HeroesListComponent,
    HeroesFormComponent
  ],
  imports: [
    BrowserModule, NgbModule, FormsModule
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
