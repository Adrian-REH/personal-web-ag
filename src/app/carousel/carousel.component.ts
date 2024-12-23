import { Component } from '@angular/core';
import { SliderService } from '../services/slider.service';
import { ImageData } from '../interfaces/slide.interface';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  constructor(private sliderService: SliderService) {}
  images: ImageData[] = [];
  ngOnInit(): void {

    combineLatest([
      this.sliderService.index$,
      this.sliderService.slide$
    ]).subscribe(([index, slides]) => {
      this.images = slides[index]?.backgroundImage || [];
    });

  }
  adjustImageSize(event: Event) {
    const img = event.target as HTMLImageElement;
    const container = img.parentElement as HTMLElement;
    console.log(container, img);

  }
}
