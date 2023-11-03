import { Component } from '@angular/core';
import { User } from '../models/user.model';
import { DBContext } from '../models/db-context.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  username: string = "";

  user?: User;

  find() {
    for(let i=0; i < DBContext.users.length; ++i) {
      if(DBContext.users[i].username == this.username) {
        this.user = DBContext.users[i];
        DBContext.currentUser = DBContext.users[i];
        break;
      }
    }
  }
}
