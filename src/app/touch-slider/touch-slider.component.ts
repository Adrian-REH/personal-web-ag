import { CommonModule } from '@angular/common';
import { Component, Input, Renderer2 } from '@angular/core';
import { ChildCardInfoComponent } from '../child-card-info/child-card-info.component';

export interface Slide {
  imgSrc: string;
  imgAlt: string;
}


@Component({
  selector: 'app-touch-slider',
  standalone: true,
  imports: [CommonModule, ChildCardInfoComponent],
  templateUrl: './touch-slider.component.html',
  styleUrl: './touch-slider.component.css'
})
export class TouchSliderComponent {

  constructor(private renderer: Renderer2) {}
  @Input() images: Slide[] = [
    {
      imgSrc: 'assets/04.jpg',
      imgAlt: 'a'
    },
    
    {
      imgSrc: 'assets/05.jpg',
      imgAlt: 'b'
    },
    
    {
      imgSrc: 'assets/05.jpg',
      imgAlt: 'b'
    },
    
    {
      imgSrc: 'assets/05.jpg',
      imgAlt: 'b'
    },
    
    {
      imgSrc: 'assets/05.jpg',
      imgAlt: 'b'
    }
  ];

  selectedIndex = 0;

  showPrev(i: number) {
    console.log("hola");

    if (this.selectedIndex > 0)
      {
        this.selectedIndex = i - 1;

      }
  }
  
  onImageClick(i: number) {
    this.selectedIndex = i;


  }

}
