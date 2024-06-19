import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatSlideToggleModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;

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
