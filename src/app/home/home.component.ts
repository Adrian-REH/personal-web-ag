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

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, RouterLink,HeaderComponent, CommonModule, FooterComponent, MatButtonModule, MatIconModule, FontAwesomeModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faMedium = faMedium;
  infoText: string = '';
  hashtags = ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS'];
  name: string = '';

  ngOnInit(): void {
    this.name = 'Adrian Herrera';
    this.infoText = '¡El tamaño de fuente en la página importa! Si eliges una fuente que no sea demasiado pequeña ni demasiado grande, harás que la lectura sea mucho más fácil para tus usuarios. Una unidad especial que usan los tipógrafos para describir las fuentes es "pt" o "punto".';
  }

}
