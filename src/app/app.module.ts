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
import { BeersComponent } from './components/beers/beers.component';
import { HttpClientModule } from '@angular/common/http';
import { ApodComponent } from './components/apod/apod.component';
import { ShowApodComponent } from './components/show-apod/show-apod.component';
import { Ng5SliderModule } from 'ng5-slider';
import { AlcoholPipe } from './pipes/alcohol.pipe';
import { FormComponent } from './components/form/form.component';
import { CountriesComponent } from './components/countries/countries.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    DisplayComponent,
    KeyboardComponent,
    HeroesComponent,
    HeroesListComponent,
    HeroesFormComponent,
    BeersComponent,
    ApodComponent,
    ShowApodComponent,
    AlcoholPipe,
    FormComponent,
    CountriesComponent
  ],
  imports: [
    BrowserModule, NgbModule, FormsModule, HttpClientModule, Ng5SliderModule
  ],
  exports: [],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
