import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showParagraph = false;
  buttonClicks = [];
  // buttonClicksCount = 1;
  toggleParagraph() {
    this.showParagraph = !this.showParagraph;
    // this.buttonClicks.push(this.buttonClicksCount++);
    this.buttonClicks.push(new Date());
  }
}
