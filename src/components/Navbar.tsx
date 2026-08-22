'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar_primary ${isScrolled ? 'is-scrolled' : ''}`} role="banner">
      <div className="navbars_container">
        
        {/* Left: Brand Logo */}
        <Link href="/" className="navbars_logo-link" aria-label="Demarii Home">
          <Image
            src="/icons/logo.svg"
            alt="Demarii Logo"
            width={140}
            height={36}
            className="navbars_logo"
            priority
          />
        </Link>

        {/* Center / Mobile Drawer: Navigation Menu */}
        <nav className={`navbars_menu is-page-height-tablet ${isMenuOpen ? 'is-open' : ''}`} role="navigation">
          <Link
            href="/"
            className={`navbars_link ${pathname === '/' ? 'w--current' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/#about"
            className="navbars_link"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/#benefit"
            className="navbars_link"
            onClick={() => setIsMenuOpen(false)}
          >
            Solutions
          </Link>
          <Link
            href="/#testimonial"
            className="navbars_link"
            onClick={() => setIsMenuOpen(false)}
          >
            Testimonial
          </Link>
          <Link
            href="/#faq"
            className="navbars_link"
            onClick={() => setIsMenuOpen(false)}
          >
            FAQ
          </Link>
          
          {/* Mobile Drawer Action Link */}
          <Link
            href="/contact"
            className="button is-navbar2-button show-mobile-only"
            onClick={() => setIsMenuOpen(false)}
            style={{ width: '100%', textAlign: 'center', justifyContent: 'center', marginTop: '8px' }}
          >
            Contact Us
          </Link>
        </nav>

        {/* Right: Solid White Pill Contact Us Button & Mobile Hamburger */}
        <div className="navbar2_button-wrapper">
          <Link
            href="/contact"
            className="button is-navbar2-button hide-mobile-portrait"
          >
            Contact Us
          </Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="navbar2_menu-button"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <div className="menu-icons">
              <span className={`menu-icon-line ${isMenuOpen ? 'is-top-open' : ''}`}></span>
              <span className={`menu-icon-line ${isMenuOpen ? 'is-mid-open' : ''}`}></span>
              <span className={`menu-icon-line ${isMenuOpen ? 'is-bot-open' : ''}`}></span>
            </div>
          </button>
        </div>

      </div>
    </header>
  );
}
