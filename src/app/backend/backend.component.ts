import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-backend',
  standalone: true,
  imports: [],
  templateUrl: './backend.component.html',
  styleUrl: './backend.component.css'
})
export class BackendComponent implements OnInit{
  constructor(private themeService: ThemeService) { }
  ngOnInit(): void {
      this.themeService.setTheme('light');
  }

}
