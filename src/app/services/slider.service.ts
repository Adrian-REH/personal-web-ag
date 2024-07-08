import { Injectable } from '@angular/core';
import { Slide, ImageData } from '../interfaces/slide.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SliderService {


  constructor() { }
  private indexSubject = new BehaviorSubject<number>(0);
  private slideSubject = new BehaviorSubject<Slide[]>([]);

  index$ = this.indexSubject.asObservable();
  slide$ = this.slideSubject.asObservable();


 setIndex(index: number) {
    this.indexSubject.next(index);
  }
  setSlides(slides: Slide[]) {
    this.slideSubject.next(slides);
  }
  getHashtagsForIndex(index: number): string[] {
    
    return this.slideSubject.getValue()[index]?.hashtags || [];
  }
  getBackGroundForIndex(index: number): ImageData[] {
    return this.slideSubject.getValue()[index]?.backgroundImage || [];
  }
  getIndex() {
    return this.indexSubject.getValue();
  }
  showPrev(i:number) {
    if (this.indexSubject.getValue() > 0) {
      this.indexSubject.next(i - 1);
    }
  }
  showNext(i:number) {
    console.log('showNext', i, this.slideSubject.getValue().length);
    if (this.indexSubject.getValue() < this.slideSubject.getValue().length -1) {
      this.indexSubject.next(i + 1);
    }
  }
}
