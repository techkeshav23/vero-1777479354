'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/menu', label: 'Menu' },
    { href: '/about', label: 'About' },
    { href: '/reservations', label: 'Reservations' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#FFFFFF]/80 dark:bg-[#141410]/80 backdrop-blur-xl border-b border-[#E8E2D5] dark:border-[#26241E] py-4' 
          : 'bg-transparent py-6'
      }`}
      style={{ fontFamily: '"Inter", sans-serif' }}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-[#1A1A1A] dark:text-[#FAFAFA]">
          Vero
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-[#1A1A1A]/70 dark:text-[#FAFAFA]/70 hover:text-[#1A1A1A] dark:hover:text-[#FAFAFA] transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-[#E8E2D5] dark:hover:bg-[#26241E] transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5 text-[#1A1A1A] dark:text-[#FAFAFA]" />
            ) : (
              <Menu className="h-5 w-5 text-[#1A1A1A] dark:text-[#FAFAFA]" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#FFFFFF] dark:bg-[#141410] border-b border-[#E8E2D5] dark:border-[#26241E] p-6 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-[#1A1A1A] dark:text-[#FAFAFA]"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}