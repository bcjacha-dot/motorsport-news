import { NextRequest, NextResponse } from 'next/server';
import { articles } from '@/lib/data/articles';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const category = searchParams.get('category');
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '6');
  const search = searchParams.get('search')?.toLowerCase();

  let filtered = [...articles];
  if (category) filtered = filtered.filter(a => a.category.slug === category);
  if (search) filtered = filtered.filter(a => a.title.toLowerCase().includes(search) || a.tags.some(t => t.toLowerCase().includes(search)));

  const start = (page - 1) * limit;
  const paginated = filtered.slice(start, start + limit);

  return NextResponse.json({
    articles: paginated,
    total: filtered.length,
    page,
    totalPages: Math.ceil(filtered.length / limit),
  });
}
