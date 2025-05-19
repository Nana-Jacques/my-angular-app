import { Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';


export const routes: Routes = [
    { path: 'user-list', component: UserListComponent },
    { path: '**', redirectTo: '/user-list', pathMatch: 'full' }
];