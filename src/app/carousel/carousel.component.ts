import { Component } from '@angular/core';
import { SliderService } from '../services/slider.service';
import { ImageData } from '../interfaces/slide.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  constructor(private sliderService: SliderService) {}
  images: ImageData[] = [];
  ngOnInit(): void {

    this.sliderService.index$.subscribe(index => {
      this.images = this.sliderService.getBackGroundForIndex(index);

    });
  }
}
