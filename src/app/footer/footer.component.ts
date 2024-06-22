import { Component, Input } from '@angular/core';
import { SliderService } from '../services/slider.service';
import { DataProyectService } from '../services/data-proyect.service';

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

    this.sliderService.index$.subscribe(index => {
      this.hashtags = this.sliderService.getHashtagsForIndex(index);
    });
   
  }
}
