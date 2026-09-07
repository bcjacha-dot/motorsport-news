'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { debounce } from '@/lib/utils';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const router = useRouter();
  const debouncedSearch = useRef(
    debounce((q: string) => {
      if (q.trim()) {
        router.push(`/?search=${encodeURIComponent(q)}`);
      }
    }, 300)
  ).current;

  useEffect(() => {
    debouncedSearch(query);
  }, [query, debouncedSearch]);

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search articles..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="bg-carbon-light text-sm rounded-full px-4 py-1.5 w-40 focus:w-56 transition-all outline-none border border-carbon-light focus:border-f1-red"
      />
    </div>
  );
}
