'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isBusinessNeedsOpen, setIsBusinessNeedsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsBusinessNeedsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header id="header" className="relative z-50 px-4 md:px-8 pt-4">
      <div className="header-container flex justify-between items-center py-1008 pl-1015 pr-1008 md:p-1008 md:pl-1012 lg:pl-1019 rounded-12gem bg-[#0b0a0a] text-white shadow-sm transition-all duration-300">

        {/* Left Section: Logo & Nav Links */}
        <div className="header-wrap__left flex items-center">
          {/* Logo */}
          <Link href="/" className="header-logo__wrap flex items-center lg:mr-1025 h-fit w-[calc(var(--🚲)*135)] md:w-[calc(var(--🚲)*145)] lg:w-[calc(var(--🚲)*155)]">
            <img src="/img-theme-assets/logos/company-logo.webp" alt="Samurai Systems Logo" className="header-logo block w-[100px] h-auto" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="header-nav__wrap hidden lg:flex ml-4">
            <ul className="header-nav__list flex items-center">

              {/* Features Link */}
              <li className="header-nav__item flex relative mr-1007">
                <Link href="/features/" className="header-nav__link block text-nav-mobile md:text-nav-tablet lg:text-nav-desktop hover:text-green">
                  Features
                </Link>
                <div className="divider"></div>
              </li>

              {/* Business Needs Dropdown Link */}
              <li className="header-nav__item flex relative mr-1007" ref={dropdownRef}>
                <button
                  onClick={() => setIsBusinessNeedsOpen(!isBusinessNeedsOpen)}
                  id="header-nav-platform"
                  className="header-nav__link flex items-center gap-1 text-nav-mobile md:text-nav-tablet lg:text-nav-desktop hover:text-green cursor-pointer select-none focus:outline-none"
                >
                  <span>Business Needs</span>
                  <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${isBusinessNeedsOpen ? 'transform rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="divider ml-3 absolute top-0 right-0 w-1"></div>

                {/* Dropdown Panel */}
                <div className={`absolute left-[-150px] z-50 mt-1040 flex w-screen max-w-max px-4 transition-all duration-200 origin-top-left ${isBusinessNeedsOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}>
                  <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-main_white text-main_green text-sm leading-6 shadow-xl ring-1 ring-gray-900/5 lg:max-w-3xl">
                    <div className="px-8 py-8 bg-white">
                      <div className="flex items-center gap-x-3">
                        <h3 className="text-h6-mobile md:text-h6-tablet lg:text-h6-desktop text-main_green font-bold">Comprehensive IT Solutions for Enterprise</h3>
                      </div>
                      <p className="mt-2 text-p2-mobile md:text-p2-tablet lg:text-p2-desktop text-main_green/70">
                        Samurai Systems helps businesses plan, build, secure, and optimize their core tech architecture with state-of-the-art services.
                      </p>
                      <Link href="/services/" className="inline-block mt-2 text-p2-mobile md:text-p2-tablet lg:text-p2-desktop text-green hover:text-main_green/70 underline font-medium">
                        See all services
                      </Link>
                    </div>

                    {/* Submenu Grid */}
                    <div className="bg-[#F6F6F6] grid grid-cols-1 gap-x-6 gap-y-1 p-4 py-6 lg:grid-cols-2">
                      {/* Sub-item 1 */}
                      <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-white transition-colors duration-200">
                        <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-white">
                          <svg className="w-6 h-6 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <div>
                          <Link href="/platform/entity-compliance/" className="text-p1-mobile md:text-p1-tablet lg:text-p1-desktop text-main_green font-bold block group-hover:text-green">
                            IT Infrastructure
                            <span className="absolute inset-0"></span>
                          </Link>
                          <p className="mt-1 text-p2-mobile md:text-p2-tablet lg:text-p2-desktop text-main_green/70">
                            Technical auditing, architecture development, and migration.
                          </p>
                        </div>
                      </div>

                      {/* Sub-item 2 */}
                      <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-white transition-colors duration-200">
                        <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-white">
                          <svg className="w-6 h-6 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                        </div>
                        <div>
                          <Link href="/platform/tax-compliance/" className="text-p1-mobile md:text-p1-tablet lg:text-p1-desktop text-main_green font-bold block group-hover:text-green">
                            Cybersecurity
                            <span className="absolute inset-0"></span>
                          </Link>
                          <p className="mt-1 text-p2-mobile md:text-p2-tablet lg:text-p2-desktop text-main_green/70">
                            Data center security services and digital threat monitoring.
                          </p>
                        </div>
                      </div>

                      {/* Sub-item 3 */}
                      <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-white transition-colors duration-200">
                        <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-white">
                          <svg className="w-6 h-6 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 .364l-.707 .707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 113.536 0V21h2v-2.343" />
                          </svg>
                        </div>
                        <div>
                          <Link href="/platform/payroll-compliance/" className="text-p1-mobile md:text-p1-tablet lg:text-p1-desktop text-main_green font-bold block group-hover:text-green">
                            AI Solutions
                            <span className="absolute inset-0"></span>
                          </Link>
                          <p className="mt-1 text-p2-mobile md:text-p2-tablet lg:text-p2-desktop text-main_green/70">
                            Machine learning integration and predictive analytics.
                          </p>
                        </div>
                      </div>

                      {/* Sub-item 4 */}
                      <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-white transition-colors duration-200">
                        <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-white">
                          <svg className="w-6 h-6 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 8H12" />
                          </svg>
                        </div>
                        <div>
                          <Link href="/platform/handbooks/" className="text-p1-mobile md:text-p1-tablet lg:text-p1-desktop text-main_green font-bold block group-hover:text-green">
                            Digital Transformation
                            <span className="absolute inset-0"></span>
                          </Link>
                          <p className="mt-1 text-p2-mobile md:text-p2-tablet lg:text-p2-desktop text-main_green/70">
                            Cloud migration, integration, and systems optimization.
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </li>

              {/* Stack Partners Link */}
              <li className="header-nav__item flex relative mr-1007">
                <Link href="/stack/" className="header-nav__link block text-nav-mobile md:text-nav-tablet lg:text-nav-desktop hover:text-green">
                  Stack Partners
                </Link>
                <div className="divider"></div>
              </li>

              {/* About Us Link */}
              <li className="header-nav__item flex relative mr-1007">
                <Link href="/about/" className="header-nav__link block text-nav-mobile md:text-nav-tablet lg:text-nav-desktop hover:text-green">
                  About Us
                </Link>
              </li>

            </ul>
          </nav>
        </div>

        {/* Right Section: Get a Quote Button */}
        <div className="header-wrap__right">
          <div className="header-btn__wrap flex items-center">
            {/* Get a Quote Button */}
            <Link
              href="/quote/"
              className="btn bg-green text-white hover:bg-main_green hover:text-white border-green text-button-large-mobile md:text-button-large-tablet lg:text-button-large-desktop hidden lg:block mr-1006 font-medium px-6 py-2 rounded-full transition-all duration-200"
            >
              Get a Quote
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

      </div>

      {/* Mobile Drawer Overlay Menu */}
      <div className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className={`absolute top-0 right-0 w-4/5 max-w-sm h-full bg-white shadow-2xl p-6 flex flex-col justify-between transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="pt-16">
            <ul className="flex flex-col gap-6 text-lg font-bold text-main_green">
              <li><Link href="/features/" onClick={() => setIsMobileMenuOpen(false)}>Features</Link></li>
              <li>
                <button
                  onClick={() => setIsBusinessNeedsOpen(!isBusinessNeedsOpen)}
                  className="flex justify-between items-center w-full text-left"
                >
                  <span>Business Needs</span>
                  <svg className={`w-4 h-4 transition-transform ${isBusinessNeedsOpen ? 'transform rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {/* Platform Sub-links */}
                <div className={`overflow-hidden transition-all duration-300 ${isBusinessNeedsOpen ? 'max-h-60 mt-4 pl-4' : 'max-h-0'}`}>
                  <ul className="flex flex-col gap-3 text-sm font-medium text-main_green/70">
                    <li><Link href="/platform/entity-compliance/" onClick={() => setIsMobileMenuOpen(false)}>IT Infrastructure</Link></li>
                    <li><Link href="/platform/tax-compliance/" onClick={() => setIsMobileMenuOpen(false)}>Cybersecurity</Link></li>
                    <li><Link href="/platform/payroll-compliance/" onClick={() => setIsMobileMenuOpen(false)}>AI Solutions</Link></li>
                    <li><Link href="/platform/handbooks/" onClick={() => setIsMobileMenuOpen(false)}>Digital Transformation</Link></li>
                  </ul>
                </div>
              </li>
              <li><Link href="/stack/" onClick={() => setIsMobileMenuOpen(false)}>Stack Partners</Link></li>
              <li><Link href="/about/" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link></li>
            </ul>
          </div>

          <div className="pb-8">
            <Link
              href="/quote/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center py-3 bg-green text-white rounded-full font-bold shadow hover:bg-main_green transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
