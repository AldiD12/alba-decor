'use client';

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  const allItems = [
    { name: 'Home', url: '/' },
    ...items
  ];

  return (
    <nav 
      className={`flex items-center space-x-2 text-sm text-alba-charcoal/70 mb-8 ${className}`}
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center space-x-2">
        {allItems.map((item, index) => (
          <li key={index} className="flex items-center">
            {index === 0 && <Home className="w-4 h-4 mr-1" />}
            
            {index < allItems.length - 1 ? (
              <>
                <Link 
                  href={item.url}
                  className="hover:text-alba-accent transition-colors duration-200"
                >
                  {item.name}
                </Link>
                <ChevronRight className="w-4 h-4 mx-2 text-alba-charcoal/40" />
              </>
            ) : (
              <span className="text-alba-primary font-medium" aria-current="page">
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}