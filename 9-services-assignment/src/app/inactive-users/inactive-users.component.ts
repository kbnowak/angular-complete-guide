import {Component} from '@angular/core';
import {UsersService} from '../users.service';
import {CounterService} from '../counter.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  constructor(private userService: UsersService, private counterService: CounterService) {
    this.users = this.userService.inactiveUsers;
  }

  users: string[];

  onSetToActive(id: number) {
    this.userService.setToActive(id);
    this.counterService.increaseCounter();
  }
}
