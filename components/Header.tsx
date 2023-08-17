'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [darkTheme, setDarkTheme] = useState<boolean | undefined>(undefined);

  const handleToggle = () => {
    setDarkTheme(!darkTheme);
  };

  useEffect(() => {
    if (darkTheme !== undefined) {
      if (darkTheme) {
        document.body.setAttribute('data-theme', 'dark');
        document.body.className = 'dark';
        window.localStorage.setItem('theme', 'dark');
      } else {
        document.body.removeAttribute('data-theme');
        document.body.className = 'light';
        window.localStorage.setItem('theme', 'light');
      }
    }
  }, [darkTheme]);

  useEffect(() => {
    const root = window.document.body;
    const initialColorValue = root.style.getPropertyValue('--initial-color-mode');

    setDarkTheme(initialColorValue === 'dark');
  }, []);

  return (
    <nav className="fixed top-0 left-0 z-10 w-full p-4 mx-auto backdrop-blur-md">
      <div className="flex items-center justify-between max-w-3xl mx-auto lg:max-w-6xl">
        <div>
          <Link href="/" className="italic no-underline blog_name">
            Devlog
          </Link>
        </div>
        <div>
          {darkTheme !== undefined && (
            <button onClick={handleToggle} className="mr-5" style={{ background: 'none' }}>
              {darkTheme ? 'light' : 'dark'}
            </button>
          )}
          <Link href="/blog" className="pr-5 no-underline">
            blog
          </Link>
          <Link href="/about" className="pr-5 no-underline">
            about
          </Link>
          <Link
            href="https://github.com/ParkJongho1"
            target="_blank"
            className="pr-5 no-underline "
          >
            git
          </Link>
        </div>
      </div>
    </nav>
  );
}
