import Image from 'next/image';
import Link from 'next/link';
import { Article } from '@/types';
import { formatRelativeTime } from '@/lib/utils';

interface ArticleCardProps {
  article: Article;
  isFeatured?: boolean;
}

export default function ArticleCard({ article, isFeatured }: ArticleCardProps) {
  return (
    <div
      className={cn(
        'bg-carbon-light rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow',
        isFeatured && 'md:col-span-2'
      )}
    >
      <div className="relative h-48 w-full">
        <Image
          src={article.featuredImage}
          alt={article.title}
          fill
          className="object-cover"
        />
        {isFeatured && (
          <span className="absolute top-2 left-2 bg-f1-red text-white text-xs px-2 py-1 rounded">
            Featured
          </span>
        )}
        <span
          className="absolute bottom-2 left-2 text-white text-xs px-2 py-1 rounded"
          style={{ backgroundColor: article.category.color }}
        >
          {article.category.name}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold line-clamp-2">
          <Link href={`/article/${article.slug}`} className="hover:text-f1-red transition">
            {article.title}
          </Link>
        </h3>
        <p className="text-sm text-gray-400 mt-1 line-clamp-3">{article.excerpt}</p>
        <div className="flex items-center mt-3 text-xs text-gray-500">
          <span className="flex items-center">
            <Image
              src={article.author.avatar}
              alt={article.author.name}
              width={24}
              height={24}
              className="rounded-full mr-2"
            />
            {article.author.name}
          </span>
          <span className="ml-auto">{formatRelativeTime(article.publishedAt)}</span>
        </div>
      </div>
    </div>
  );
}
