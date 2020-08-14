import { Component } from '@angular/core';
import arrayWords from '../utils/words';
import arrayCountries from '../utils/countries';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'word-generator';

  words = '';
  limit = 10;
  countries = '';
  num = 5;

  // Handling the slider change listener:
  handleSliderChange(newLimit: number) {
    this.limit = newLimit;
  }

  // Generating words on the basis of limit from arraWords
  generate() {
    this.words = arrayWords.slice(0, this.limit).join(' ');
  }

  generateCountries() {
    this.num = Math.floor(Math.random() * 16) + 1;
    this.countries = arrayCountries.slice(0, this.num).join(' ');
  }
}
