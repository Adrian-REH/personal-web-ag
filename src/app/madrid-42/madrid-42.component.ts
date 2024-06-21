import { Component, OnInit } from '@angular/core';
import { ChildCardInfoComponent } from '../child-card-info/child-card-info.component';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { CarouselComponent } from '../carousel/carousel.component';
import { SlideChildCardComponent } from '../slide-child-card/slide-child-card.component';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-madrid-42',
  standalone: true,
  imports: [SlideChildCardComponent,ChildCardInfoComponent, HeaderComponent, FooterComponent, CarouselComponent],
  templateUrl: './madrid-42.component.html',
  styleUrl: './madrid-42.component.css'
})
export class Madrid42Component {
  constructor(private themeService: ThemeService) { }
  ngOnInit(): void {
      this.themeService.setTheme('dark');
  }
}
