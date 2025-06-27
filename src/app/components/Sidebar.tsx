'use client'; 
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation'; 

const navItems = [
    { href: '/', label: 'Account', image: '/useradmin/account.svg' },
    { href: '/billing', label: 'Billing', image: '/useradmin/billing.svg' },
    { href: '/api-keys', label: 'API Keys', image: '/useradmin/api.svg' },
    { href: '/docs', label: 'Docs', image: '/useradmin/docs.svg' },
];

const Sidebar = () => {
    const pathname = usePathname(); 

    return (
        <>
            <aside className='w-[233px] border-r  border-white/10 h-screen' >
                <div className='flex items-center justify-between text-white p-2.5'>
                    <Image src="/useradmin/logo.svg" alt="logo" width={43} height={56} />
                    <Link href="/" className='text-2xl font-[570]'>PHI PROTOCOL</Link>
                </div>
                <div className='mt-[75px]'>
                    <nav className="space-y-4">
                        {navItems.map(item => {
                            const isActive = pathname === item.href; 
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`flex items-center gap-2 py-2.5 px-7 transition-colors ${
                                        isActive ? 'bg-[#2F2819] border-l-3 border-[#f4a618] text-[#f4a618]' : 'border-l-3 border-transparent text-white' }`} >
                                    <Image src={item.image} alt={item.label} height={32} width={32} />
                                    {item.label}
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
