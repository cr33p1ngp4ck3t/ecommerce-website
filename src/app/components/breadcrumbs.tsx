
"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React from 'react';
import '../styles/style.css';

const Breadcrumb = () => {
  const pathname = usePathname();
  const pathnames = pathname.split('/').filter((x) => x);

  if (pathname === '/') {
    return null; 
  }

  return (
    <nav>
      <ul className="breadcrumb">
        <li key="home">
          <Link href="/">Home  &gt;</Link>
        </li>
        {pathnames.map((value, index) => {
          const to = '/' + pathnames.slice(0, index + 1).join('/');
          if (index === pathnames.length - 1) return pathnames; 
          return (
            <li key={to}>
              <Link href={to}>{value}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;