import { Article } from '@/types';

export const articles: Article[] = [
  {
    id: '1',
    title: 'Verstappen Dominates Season Opener in Bahrain',
    slug: 'verstappen-dominates-bahrain',
    excerpt:
      'Max Verstappen cruised to victory ahead of teammate Perez, sending a strong message to rivals.',
    content: 'Full content here... (Rich text)',
    featuredImage: '/images/bahrain.jpg',
    author: { name: 'James Allen', avatar: '/avatars/james.jpg' },
    category: { id: 'f1', name: 'Formula 1', slug: 'f1', color: '#e10600' },
    tags: ['Verstappen', 'Red Bull', 'Bahrain'],
    publishedAt: '2026-03-01T14:30:00Z',
    isBreaking: true,
    isFeatured: true,
  },
  // ... 19 more articles covering all categories, with varied dates and breaking status
];
