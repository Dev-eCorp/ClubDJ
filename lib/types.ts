export interface Stat {
  number: string;
  label: string;
  icon: JSX.Element;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

export interface Course {
  title: string;
  description: string;
  duration: string;
  modality: string;
  image: string;
  icon: JSX.Element;
  benefits: string[];
  color: string; // Ej: "from-purple-500 to-pink-500"
}

export interface Equipment {
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
}
