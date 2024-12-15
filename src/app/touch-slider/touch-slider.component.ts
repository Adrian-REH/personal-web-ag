import { CommonModule } from '@angular/common';
import { Component, Input, Renderer2 } from '@angular/core';
import { ChildCardInfoComponent } from '../child-card-info/child-card-info.component';
import { Slide } from '../interfaces/slide.interface';
import { SliderService } from '../services/slider.service';

@Component({
  selector: 'app-touch-slider',
  standalone: true,
  imports: [CommonModule, ChildCardInfoComponent],
  templateUrl: './touch-slider.component.html',
  styleUrl: './touch-slider.component.css'
})
export class TouchSliderComponent {

  constructor(private sliderService: SliderService) {}
  @Input() items: Slide[] = [];


  
  onImageClick(i: number) {
    this.sliderService.setIndex(i);
    }

  getIndex() {
    return this.sliderService.getIndex();
   }

   showPrev(i:number) {
    this.sliderService.showPrev(i);
  }
  showNext(i:number) {
    this.sliderService.showNext(i);
  }
}
