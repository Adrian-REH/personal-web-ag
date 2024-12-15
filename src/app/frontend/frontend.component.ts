import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ChildCardInfoComponent } from '../child-card-info/child-card-info.component';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { CarouselComponent } from '../carousel/carousel.component';
import { ThemeService } from '../theme.service';
import { TouchSliderComponent } from '../touch-slider/touch-slider.component';
import { Slide } from '../interfaces/slide.interface';
import { SliderService } from '../services/slider.service';
import { DataProyectService } from '../services/data-proyect.service';

@Component({
    selector: 'app-frontend',
    standalone: true,
    templateUrl: './frontend.component.html',
    styleUrl: './frontend.component.css',
    imports: [ TouchSliderComponent,HeaderComponent,ChildCardInfoComponent, FooterComponent, CarouselComponent]
})
export class FrontendComponent implements OnInit{
    constructor(private themeService: ThemeService, private slide: SliderService, private dataProyectService: DataProyectService) { }
 
    items: Slide[] = [];
    ngOnInit(): void {
        this.dataProyectService.getData().subscribe(data => {
            this.items = data['frontend'];
            this.slide.setSlides(data['frontend']);

        });
        this.themeService.setTheme('dark');
    }

}
