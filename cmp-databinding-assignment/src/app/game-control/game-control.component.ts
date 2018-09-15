import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  intervalRef;
  currentNumber = 0;
  @Output() numberEmitted = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  start() {
    console.log('started');
    this.intervalRef = setInterval(() => {
      console.log('working');
      this.numberEmitted.emit(this.currentNumber);
      this.currentNumber++;
    }, 1000);
  }

  stop() {
    console.log('stopped');
    clearInterval(this.intervalRef);
  }

}
