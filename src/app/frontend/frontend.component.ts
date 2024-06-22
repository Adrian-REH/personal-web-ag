import { Component, OnInit } from '@angular/core';
import { ChildCardInfoComponent } from '../child-card-info/child-card-info.component';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { CarouselComponent } from '../carousel/carousel.component';
import { ThemeService } from '../theme.service';
import { Slide, TouchSliderComponent } from '../touch-slider/touch-slider.component';

@Component({
    selector: 'app-frontend',
    standalone: true,
    templateUrl: './frontend.component.html',
    styleUrl: './frontend.component.css',
    imports: [ TouchSliderComponent,ChildCardInfoComponent, HeaderComponent, FooterComponent, CarouselComponent]
})
export class FrontendComponent implements OnInit{
    constructor(private themeService: ThemeService) { }
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
    ngOnInit(): void {
        this.themeService.setTheme('dark');
    }

}
