'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';

export default function SearchBar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  function handleSearch(term) {
    const params = new URLSearchParams(searchParams);
    
    if (term) {
      params.set('q', term);
    } else {
      params.delete('q');
    }

    router.replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="mb-8 max-w-md mx-auto">
      <label htmlFor="search" className="sr-only">Search</label>
      <input
        type="text"
        id="search"
        placeholder="Search for products..."
        className="w-full p-4 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get('q')?.toString()}
      />
    </div>
  );
}