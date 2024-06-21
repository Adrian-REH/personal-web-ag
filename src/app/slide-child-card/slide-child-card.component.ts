import {  CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { Swiper } from 'swiper/types';
import { ChildCardInfoComponent } from '../child-card-info/child-card-info.component';

@Component({
  selector: 'app-slide-child-card',
  standalone: true,
  imports: [ChildCardInfoComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './slide-child-card.component.html',
  styleUrl: './slide-child-card.component.css'
})
export class SlideChildCardComponent {



}
