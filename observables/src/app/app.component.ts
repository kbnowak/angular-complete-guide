import {Component, OnInit} from '@angular/core';
import {UsersServices} from './users.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user1Activated = false;
  user2Activated = false;


  constructor(private usersService: UsersServices) {
  }

  ngOnInit() {
    this.usersService.userActivated.subscribe(
      (id: number) => {
        if (id === 1) {
          this.user1Activated = true;
        } else {
          this.user2Activated = true;
        }
      });
  }
}
