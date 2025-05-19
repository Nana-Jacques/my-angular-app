import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';
import { CommonModule } from '@angular/common';
import { FilterPipe } from '../filtres/filter.pipe';
import { Subject, takeUntil } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-list',
  imports: [FormsModule,CommonModule,FilterPipe],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  searchText = '';
  isLoading = false;
  private destroy$ = new Subject<void>();
  constructor(private userService: UserService) {}
  /*ngOnInit() {
    this.userService.getUsers().subscribe(data => this.users = data);
  }*/
  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.isLoading = true;
    this.userService.getUsers()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: users => {
          this.users = users;
          this.isLoading = false;
        },
        error: () => this.isLoading = false
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
