import { Component, Input } from '@angular/core';
import { Slide } from '../interfaces/slide.interface';

@Component({
  selector: 'app-child-card-info',
  standalone: true,
  imports: [],
  templateUrl: './child-card-info.component.html',
  styleUrl: './child-card-info.component.css'
})
export class ChildCardInfoComponent {

  @Input() item: Slide = {title: '', description: ''};
}
