'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import ThemeToggle from '@/components/ui/ThemeToggle';
import SearchBar from '@/components/common/SearchBar';
import LiveBadge from '@/components/ui/LiveBadge';

const categories = [
  { name: 'Formula 1', slug: 'f1' },
  { name: 'MotoGP', slug: 'motogp' },
  { name: 'WRC', slug: 'wrc' },
  { name: 'IndyCar', slug: 'indycar' },
  { name: 'WEC', slug: 'wec' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-carbon/90 backdrop-blur-md border-b border-carbon-light">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.svg" alt="Motorsport News" width={40} height={40} />
          <span className="text-xl font-bold hidden sm:inline">RacingPost</span>
        </Link>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center space-x-6">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/?category=${cat.slug}`}
              className="text-sm hover:text-f1-red transition"
            >
              {cat.name}
            </Link>
          ))}
        </nav>

        {/* Right side: Live indicator, Search, Theme */}
        <div className="flex items-center space-x-4">
          <LiveBadge text="LIVE: F1 Qualifying" />
          <SearchBar />
          <ThemeToggle />
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-carbon-light p-4 space-y-2">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/?category=${cat.slug}`}
              className="block py-2 hover:text-f1-red transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {cat.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
