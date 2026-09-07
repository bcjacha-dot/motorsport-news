export interface Author {
  name: string;
  avatar: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  color: string;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  author: Author;
  category: Category;
  tags: string[];
  publishedAt: string;
  isBreaking: boolean;
  isFeatured?: boolean;
}

export interface Standing {
  position: number;
  driverName: string;
  team: string;
  points: number;
}

export interface RaceSchedule {
  id: string;
  date: string;
  trackName: string;
  category: string;
}
