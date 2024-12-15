import { Component, Input, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  checked = false;
  disabled = false;
  @Input() activeToggle: boolean = false;
  constructor(private theme: ThemeService) { }

  toggleTheme() {
    this.theme.toggleTheme();

  }


}
