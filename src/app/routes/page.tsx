import HeroCarousel from '@/components/sections/HeroCarousel';
import NewsGrid from '@/components/sections/NewsGrid';
import Sidebar from '@/components/sections/Sidebar';
import { getArticles } from '@/lib/api'; // mock API

export const revalidate = 60; // ISR: revalidate every 60 seconds

export default async function HomePage() {
  // In production, fetch from real API
  // const articles = await getArticles({ page: 1, limit: 6 });

  return (
    <main>
      <HeroCarousel />
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <NewsGrid />
        </div>
        <div className="lg:col-span-1">
          <Sidebar />
        </div>
      </div>
    </main>
  );
}
