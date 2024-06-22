import { Injectable } from '@angular/core';
import { Slide, ImageData } from '../interfaces/slide.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  constructor() { }
  private indexSubject = new BehaviorSubject<number>(0);
  index$ = this.indexSubject.asObservable();
  slides: Slide[] = [];


 setIndex(index: number) {
    this.indexSubject.next(index);
  }
  getHashtagsForIndex(index: number): string[] {
    return this.slides[index]?.hashtags || [];
  }
  getBackGroundForIndex(index: number): ImageData[] {
    return this.slides[index]?.backgroundImage || [];
  }
  getIndex() {
    return this.indexSubject.getValue();
  }
}
