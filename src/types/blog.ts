
export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  location: string;
}

export interface PointOfInterest {
  id: number;
  name: string;
  description: string;
  location: [number, number]; // [longitude, latitude]
}
