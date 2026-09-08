import { getArticleBySlug, getAllSlugs } from '@/lib/api';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { formatRelativeTime } from '@/lib/utils';

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export const revalidate = 60;

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = await getArticleBySlug(params.slug);
  if (!article) return notFound();

  return (
    <article className="container mx-auto px-4 py-8 max-w-3xl">
      <div className="mb-6">
        <span className="text-sm font-semibold" style={{ color: article.category.color }}>
          {article.category.name}
        </span>
        <h1 className="text-4xl md:text-5xl font-bold mt-2">{article.title}</h1>
        <div className="flex items-center gap-3 mt-3 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <Image
              src={article.author.avatar}
              alt={article.author.name}
              width={32}
              height={32}
              className="rounded-full"
            />
            <span>{article.author.name}</span>
          </div>
          <span>•</span>
          <span>{formatRelativeTime(article.publishedAt)}</span>
        </div>
      </div>
      <div className="relative aspect-video mb-6">
        <Image src={article.featuredImage} alt={article.title} fill className="object-cover rounded-xl" />
      </div>
      <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: article.content }} />
      {/* Related articles stub */}
      <div className="mt-12 border-t border-gray-800 pt-8">
        <h3 className="text-2xl font-bold">Related News</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          {/* map related articles */}
        </div>
      </div>
      {/* Comments stub */}
      <div className="mt-8 border-t border-gray-800 pt-8">
        <h3 className="text-xl font-bold">Comments</h3>
        <p className="text-gray-400">Comment functionality coming soon.</p>
      </div>
    </article>
  );
}
