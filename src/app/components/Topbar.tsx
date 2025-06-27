'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/account', label: 'Account' },
  { href: '/billing', label: 'Billing' },
  { href: '/api-keys', label: 'API Keys' },
  { href: '/docs', label: 'Docs' },
];

const Topbar = () => {
  const pathname = usePathname();

  // Find the current page label
  const currentPage = navItems.find(item => item.href === pathname);
  const currentLabel = currentPage ? currentPage.label : 'Dashboard';

  return (
    <>
      <nav className='p-5 border-b border-white/10 flex justify-between items-center'>
        <Link href={pathname} className='text-2xl font-semibold text-white'>
          {currentLabel}
        </Link>

        <div className="inline-flex items-center gap-2 py-2 px-6 rounded-full relative z-0">
          <div className="absolute inset-0 rounded-full p-[1px] bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 z-[-1]">
            <div className="h-full w-full rounded-full bg-[#121212]"></div>
          </div>
          <span className='font-[570] text-lg text-white'>$15,426</span>
          <Image src="/useradmin/wallet.svg" height={20} width={20} alt='' />
        </div>
      </nav>
    </>
  );
};

export default Topbar;
