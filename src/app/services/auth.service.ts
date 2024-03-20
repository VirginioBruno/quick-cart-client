import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string | null = null;

  constructor() { }

  login(username: string, password: string): void {
    this.token = 'fake-jwt-token';
    localStorage.setItem('customerId', 'xpto');
  }

  logout(): void {
    this.token = null;
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  getToken(): string | null {
    return this.token;
  }
}
