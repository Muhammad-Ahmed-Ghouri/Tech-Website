'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { label: 'About Us', href: '/about/' },
  { label: 'AI Solutions', href: '/ai-solutions/' },
  { label: 'Services', href: '/services/' },
  { label: 'Compliance', href: '/compliance/' },
  { label: 'BCM', href: '/bcm/' },
  { label: 'CyberSecurity', href: '/cybersecurity/' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header id="header" className="relative z-50 px-4 md:px-8 pt-4">
      <div className="header-container flex justify-between items-center py-1008 px-1040 md:py-1008 md:px-1040 lg:px-1040 rounded-full bg-black/85 text-white shadow-sm transition-all duration-300">

        {/* Left Section: Logo */}
        <div className="header-wrap__left flex items-center">
          <Link href="/" className="header-logo__wrap flex items-center h-fit w-[calc(var(--🚲)*135)] md:w-[calc(var(--🚲)*145)] lg:w-[calc(var(--🚲)*155)]">
            <img src="/img-theme-assets/logos/company-logo.webp" alt="Samurai Systems Logo" className="header-logo block w-[100px] h-auto" />
          </Link>
        </div>

        {/* Right Section: Nav Links + BOOK A BRIEFING */}
        <div className="header-wrap__right flex items-center">
          {/* Desktop Navigation Links */}
          <nav className="header-nav__wrap hidden lg:flex">
            <ul className="header-nav__list flex items-center gap-1">
              {navLinks.map((link, i) => (
                <li key={link.label} className="header-nav__item flex relative">
                  <Link href={link.href} className="header-nav__link relative block text-[12px] lg:text-[14px] font-medium px-3 py-1 nav-underline">
                    {link.label}
                  </Link>
                  {i < navLinks.length - 1 && <div className="divider"></div>}
                </li>
              ))}
            </ul>
          </nav>

          {/* BOOK A BRIEFING Button */}
          <Link
            href="/quote/"
            className="btn bg-green text-white hover:bg-main_green hover:text-white border-green text-button-large-mobile md:text-button-large-tablet lg:text-button-large-desktop hidden lg:block ml-4 font-[14px] px-4 py-1 rounded-full transition-all duration-200"
          >
            BOOK A BRIEFING
          </Link>

          {/* Mobile Hamburger Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="header-burger ml-1008 lg:hidden flex flex-col justify-between w-6 h-4 cursor-pointer focus:outline-none z-50 relative"
            aria-label="Toggle Navigation Menu"
          >
            <span className={`block w-full h-[2px] bg-green transition-transform duration-300 ${isMobileMenuOpen ? 'transform rotate-45 translate-y-[7px]' : ''}`}></span>
            <span className={`block w-full h-[2px] bg-green transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-full h-[2px] bg-green transition-transform duration-300 ${isMobileMenuOpen ? 'transform -rotate-45 translate-y-[-7px]' : ''}`}></span>
          </button>
        </div>

      </div>

      {/* Mobile Drawer Overlay Menu */}
      <div className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className={`absolute top-0 right-0 w-4/5 max-w-sm h-full bg-white shadow-2xl p-6 flex flex-col justify-between transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="pt-16">
            <ul className="flex flex-col gap-6 text-lg font-bold text-main_green">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} onClick={() => setIsMobileMenuOpen(false)}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="pb-8">
            <Link
              href="/quote/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center py-3 bg-green text-white rounded-full font-bold shadow hover:bg-main_green transition-colors"
            >
              BOOK A BRIEFING
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
