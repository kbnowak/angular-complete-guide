import {Component} from '@angular/core';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  constructor(private userService: UsersService) {
    this.users = this.userService.inactiveUsers;
  }

  users: string[];

  onSetToActive(id: number) {
    this.userService.setToActive(id);
  }
}
