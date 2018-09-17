import {Component} from '@angular/core';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  constructor(private userService: UsersService) {
    this.users = this.userService.activeUsers;
  }

  users: string[];

  onSetToInactive(id: number) {
    this.userService.setToInactive(id);
  }
}
