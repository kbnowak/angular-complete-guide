import {Component} from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  serverdId: number = 120;
  serverStatus: string = 'offline';

  getServerStatus() {
    return this.serverStatus;
  }
}
