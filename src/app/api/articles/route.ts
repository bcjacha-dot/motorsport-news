import { NextRequest, NextResponse } from 'next/server';
import { articles } from '@/data/articles';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const category = searchParams.get('category');
  const page = parseInt(searchParams.get('page') || '1');
  const limit = 9;

  let filtered = [...articles];
  if (category) {
    filtered = filtered.filter((a) => a.category.slug === category);
  }

  const start = (page - 1) * limit;
  const end = start + limit;
  const paginated = filtered.slice(start, end);

  return NextResponse.json({
    data: paginated,
    total: filtered.length,
    page,
    totalPages: Math.ceil(filtered.length / limit),
  });
}
