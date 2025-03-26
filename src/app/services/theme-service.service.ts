import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeServiceService {
  private themeSubject = new BehaviorSubject<string>(
    localStorage.getItem('theme') || 'light'
  );
  theme$ = this.themeSubject.asObservable();

  setTheme(theme: string) {
    localStorage.setItem('theme', theme);
    this.themeSubject.next(theme); // Notify all components
  }
}
