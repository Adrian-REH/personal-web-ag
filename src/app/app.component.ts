import { Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { delay } from 'rxjs';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {HeaderComponent} from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent, FooterComponent, MatButtonModule, MatIconModule, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  faGithub = faGithub;
  infoText: string = '';
  hashtags = ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS'];
  name: string = '';
  
  ngOnInit(): void {
    this.name = 'Adrian Herrera';
    this.infoText = '¡El tamaño de fuente en la página importa! Si eliges una fuente que no sea demasiado pequeña ni demasiado grande, harás que la lectura sea mucho más fácil para tus usuarios. Una unidad especial que usan los tipógrafos para describir las fuentes es "pt" o "punto".';
  }


}
