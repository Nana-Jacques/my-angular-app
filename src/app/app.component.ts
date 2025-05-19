import { Component } from '@angular/core';

import { UserListComponent } from "./user-list/user-list.component";


@Component({
  selector: 'app-root',
  imports: [UserListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-angular-app';
}
