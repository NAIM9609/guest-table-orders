'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const BreadCrumbs = () => {
    const pathname = usePathname();

    const Path = Array.from(
        new Set(pathname.split('/'))
    );
    
  return (
    <>
    <div className="text-sm breadcrumbs">
        <ul>
            {Path.map((p) => {
                const breadCrumbHref = p === '' ? `/` : `/${p}`;
                const breadCrumbText = p === '' ? `home` : `${p}`;
                
                return <li key={breadCrumbText}><Link href={breadCrumbHref}>{breadCrumbText}</Link></li>
            })}
        </ul>
    </div>
    </>
  )
}

export default BreadCrumbs