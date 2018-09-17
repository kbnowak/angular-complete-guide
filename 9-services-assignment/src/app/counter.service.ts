import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  counter = 0;

  increaseCounter() {
    this.counter++;
    console.log('Current value is ' + this.counter);
  }
}
