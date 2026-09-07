import { fetchArticles, fetchStandings, fetchSchedule } from '@/lib/api';
import HeroCarousel from '@/components/sections/HeroCarousel';
import NewsGrid from '@/components/sections/NewsGrid';
import Sidebar from '@/components/sections/Sidebar';

export default async function HomePage() {
  // Fetch all articles (mock) – on server with ISR
  const articles = await fetchArticles({ page: 1, limit: 9 });
  const standings = await fetchStandings();
  const schedule = await fetchSchedule();

  // Separate breaking news for hero
  const breakingNews = articles.filter((a) => a.isBreaking).slice(0, 3);
  const featured = articles.find((a) => a.isFeatured);
  const rest = articles.filter((a) => !a.isFeatured);

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Hero Carousel */}
      <section className="mb-10">
        <HeroCarousel slides={breakingNews} />
      </section>

      {/* Main content: News Grid + Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <NewsGrid featured={featured} articles={rest} />
        </div>
        <aside className="lg:col-span-4">
          <Sidebar standings={standings} schedule={schedule} />
        </aside>
      </div>
    </div>
  );
}
