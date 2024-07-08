import { Component, Input } from '@angular/core';
import { SliderService } from '../services/slider.service';
import { DataProyectService } from '../services/data-proyect.service';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  @Input() hashtags: string[] = [];

  constructor(private sliderService: SliderService) {}
  
  ngOnInit(): void {

    combineLatest([
      this.sliderService.index$,
      this.sliderService.slide$
    ]).subscribe(([index, slides]) => {
      this.hashtags = slides[index]?.hashtags || [];
    });



  }
}
