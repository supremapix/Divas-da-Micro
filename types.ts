
export interface Service {
  id: string;
  title: string;
  description: string;
  details: string;
  icon: string;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  service: string;
  stars: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface LocationData {
  slug: string;
  name: string;
  isCity: boolean;
}
