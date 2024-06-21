import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }

  setTheme(theme: string) {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.remove('dark-theme');
      root.classList.add('light-theme');
    } else if (theme === 'dark') {
      root.classList.remove('light-theme');
      root.classList.add('dark-theme');
    }
  }
  toggleTheme() {
    const root = document.documentElement;
    if (root.classList.contains('light-theme')) {
      root.classList.remove('light-theme');
      root.classList.add('dark-theme');
    } else if (root.classList.contains('dark-theme')){
      root.classList.remove('dark-theme');
      root.classList.add('light-theme');
    } else {
      root.classList.add('dark-theme');
    }
  }
}
