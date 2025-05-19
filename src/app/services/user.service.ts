import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { Observable, catchError, of, retry } from 'rxjs';

@Injectable({
 providedIn: 'root'
})

export class UserService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) {} 
  getUsers(): Observable<any[]> {
    //return this.http.get<any[]>(this.apiUrl);
    return this.http.get<any[]>(this.apiUrl).pipe(
      retry(2),
      catchError(error => {
        console.error('API Error:', error);
        return of([]);
      })
    );
  }
}