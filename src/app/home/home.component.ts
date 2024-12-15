import { Component, OnInit} from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { delay } from 'rxjs';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin, faMedium} from '@fortawesome/free-brands-svg-icons';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ChildCardInfoComponent } from '../child-card-info/child-card-info.component';
import { ThemeService } from '../theme.service';
import { SliderService } from '../services/slider.service';
import { DataProyectService } from '../services/data-proyect.service';
import { Slide } from '../interfaces/slide.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ChildCardInfoComponent,HeaderComponent, CommonModule, FooterComponent, MatButtonModule, MatIconModule, FontAwesomeModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faMedium = faMedium;
  constructor(private themeService: ThemeService, private slide: SliderService, private dataProyectService: DataProyectService) { }
  item: Slide = {} as Slide;

  ngOnInit(): void {
    this.dataProyectService.getData().subscribe(data => {
      this.item = data['home'];
      this.slide.setSlides([this.item]);

    });
    this.themeService.setTheme('dark');
  }

}
