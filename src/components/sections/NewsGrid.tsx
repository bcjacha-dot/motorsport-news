'use client';

import { useState } from 'react';
import { Article } from '@/types';
import ArticleCard from '@/components/ui/ArticleCard';
import Button from '@/components/ui/Button';
import { fetchArticles } from '@/lib/api';

interface NewsGridProps {
  featured?: Article;
  articles: Article[];
}

export default function NewsGrid({ featured, articles: initialArticles }: NewsGridProps) {
  const [articles, setArticles] = useState(initialArticles);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const loadMore = async () => {
    setLoading(true);
    const nextPage = page + 1;
    const res = await fetchArticles({ page: nextPage, limit: 9 });
    if (res.length === 0) {
      setHasMore(false);
    } else {
      setArticles((prev) => [...prev, ...res]);
      setPage(nextPage);
    }
    setLoading(false);
  };

  return (
    <div>
      {/* Featured Article (spans 2 cols on desktop) */}
      {featured && (
        <div className="mb-8">
          <ArticleCard article={featured} isFeatured />
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>

      {/* Load More */}
      {hasMore && (
        <div className="flex justify-center mt-10">
          <Button onClick={loadMore} disabled={loading}>
            {loading ? 'Loading...' : 'Load More'}
          </Button>
        </div>
      )}
    </div>
  );
}
