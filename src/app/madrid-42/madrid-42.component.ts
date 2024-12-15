import { Component, OnInit } from '@angular/core';
import { ChildCardInfoComponent } from '../child-card-info/child-card-info.component';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { CarouselComponent } from '../carousel/carousel.component';
import { ThemeService } from '../theme.service';
import { TouchSliderComponent } from "../touch-slider/touch-slider.component";
import { Slide } from '../interfaces/slide.interface';
import { SliderService } from '../services/slider.service';
import { DataProyectService } from '../services/data-proyect.service';

@Component({
    selector: 'app-madrid-42',
    standalone: true,
    templateUrl: './madrid-42.component.html',
    styleUrl: './madrid-42.component.css',
    imports: [ ChildCardInfoComponent, HeaderComponent, FooterComponent, CarouselComponent, TouchSliderComponent]
})
export class Madrid42Component {
  items: Slide[] = [];
  constructor(private themeService: ThemeService, private slide: SliderService, private dataProyectService: DataProyectService) { }
  ngOnInit(): void {
    this.dataProyectService.getData().subscribe(data => {
      this.items = data['42Madrid'];
      this.slide.setSlides(this.items);

    });
    console.log(this.items)
    this.themeService.setTheme('dark');
  }
}
