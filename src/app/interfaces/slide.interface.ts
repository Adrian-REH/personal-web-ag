export interface Slide {
    title: string;
    description: string;
    backgroundImage?: ImageData[];
    hashtags?: string[];
  }

  export interface ImageData {
    src: string;
    alt: string;
  }
  