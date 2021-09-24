import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

  export class AuthService {
    token: string = ''
  
    constructor(
      private http: HttpClient,
      private router: Router
    ) {
      this.token = localStorage.getItem('token') || ''
    }
  
    get isLoggedIn(): boolean {
      return this.token != '';
    }
  
    login(username: string, password: string): Observable<any> {
      return of(true).pipe(map(res => {
        this.token = 'random';
        localStorage.setItem('token', 'random')
      }));
      
    }
  
    register(username: string, password: string) {
      return of(true);
      
    }
  
    logout() {
      localStorage.clear();
      this.token = '';
      this.router.navigate(['/login'])
    }
  }

