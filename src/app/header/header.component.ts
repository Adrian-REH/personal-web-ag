import { Component, Input, input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../theme.service';

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
  @Input() activeToggle: boolean = false;
  constructor(private theme: ThemeService) { }

  toggleTheme() {
    this.theme.toggleTheme();
  }

  darkTheme() {
    const root = document.documentElement;
    if (root.classList.contains('light-theme')) {
      root.classList.remove('light-theme');
    }

    root.classList.add('dark-theme');

  }
}
