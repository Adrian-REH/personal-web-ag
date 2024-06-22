import { Component, OnInit } from '@angular/core';
import { ChildCardInfoComponent } from '../child-card-info/child-card-info.component';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { CarouselComponent } from '../carousel/carousel.component';
import { SlideChildCardComponent } from '../slide-child-card/slide-child-card.component';
import { ThemeService } from '../theme.service';
import { Slide, TouchSliderComponent } from "../touch-slider/touch-slider.component";

@Component({
    selector: 'app-madrid-42',
    standalone: true,
    templateUrl: './madrid-42.component.html',
    styleUrl: './madrid-42.component.css',
    imports: [SlideChildCardComponent, ChildCardInfoComponent, HeaderComponent, FooterComponent, CarouselComponent, TouchSliderComponent]
})
export class Madrid42Component {
  images: Slide[] = [
    {
        imgSrc:'assets/04.jpg',
        imgAlt:'a'
    },
    {
        imgSrc:'assets/05.jpg',
        imgAlt:'av'
    },
]
  constructor(private themeService: ThemeService) { }
  ngOnInit(): void {
      this.themeService.setTheme('dark');
  }
}
