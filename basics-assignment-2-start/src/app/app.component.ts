import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  usernameEmpty = true;
  username = '';

  usernameChanged() {
    this.usernameEmpty = this.username.length === 0;
  }

  resetUsername() {
    this.username = '';
    this.usernameEmpty = true;
  }
}
