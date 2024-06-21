import { Component, OnInit } from '@angular/core';
import { ChildCardInfoComponent } from '../child-card-info/child-card-info.component';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { CarouselComponent } from '../carousel/carousel.component';
import { SlideChildCardComponent } from '../slide-child-card/slide-child-card.component';
import { ThemeService } from '../theme.service';

@Component({
    selector: 'app-frontend',
    standalone: true,
    templateUrl: './frontend.component.html',
    styleUrl: './frontend.component.css',
    imports: [SlideChildCardComponent,ChildCardInfoComponent, HeaderComponent, FooterComponent, CarouselComponent]
})
export class FrontendComponent implements OnInit{
    constructor(private themeService: ThemeService) { }
    ngOnInit(): void {
        this.themeService.setTheme('light');
    }

}
