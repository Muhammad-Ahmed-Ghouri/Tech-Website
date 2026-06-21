'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isPlatformOpen, setIsPlatformOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsPlatformOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header id="header" className="relative z-50 px-4 md:px-8 pt-4">
      <div className="header-container flex justify-between items-center py-1008 pl-1015 pr-1008 md:p-1008 md:pl-1012 lg:pl-1019 rounded-12gem bg-white shadow-sm transition-all duration-300">
        
        {/* Left Section: Logo & Nav Links */}
        <div className="header-wrap__left flex items-center">
          {/* Logo */}
          <Link href="/" className="header-logo__wrap flex items-center w-1048 md:w-1053 lg:w-1074 lg:mr-1025 h-fit">
            <svg className="header-logo block w-full h-full" width="48" height="12" viewBox="0 0 48 12" fill="none">
              <g clipPath="url(#clip0_1214_10948)">
                <path d="M13.0271 3.91913V9.23639C13.0271 9.31571 12.9648 9.37947 12.8872 9.37947H10.2745C10.197 9.37947 10.1347 9.31571 10.1347 9.23639V4.06065C10.1347 3.72784 10.1165 3.34681 9.97967 3.03888 9.91736 2.90824 9.83376 2.79938 9.73345 2.72006 9.5693 2.58943 9.35803 2.52566 9.08749 2.52566c-.50461.0-.89522.1773-1.01833.46345-.14135.30949-.14135.73251-.14135 1.0731V9.23639C7.92781 9.31571 7.86549 9.37947 7.78798 9.37947H5.24518C5.16766 9.37947 5.10535 9.31571 5.10535 9.23639L5.09927 4.06065C5.09927 3.72784 5.08103 3.34681 4.94424 3.03888 4.88192 2.90824 4.79833 2.79938 4.69802 2.72006 4.53387 2.58943 4.3226 2.52566 4.05206 2.52566c-.50461.0-.89522.1773-1.01834.46345-.14135.30949-.14135.73251-.14135 1.0731V9.23639C2.89237 9.31571 2.83006 9.37947 2.75254 9.37947H.139831C.062316 9.37947.0 9.31571.0 9.23639V.143079C0 .0637636.062316.0.139831.0H2.58839C2.66591.0 2.72822.0637636 2.72822.143079V.527216C2.72822.584759 2.79054.618974 2.83766.586314 4.81049-.802489 6.73164.738725 6.7514.755832 6.82132.81182 6.88819.872473 6.94899.933126 7.00219.987559 7.05234 1.04199 7.10098 1.09487 7.15874 1.16019 7.25905 1.15708 7.31377 1.08865c.14591-.183518.32829-.356146.535-.507001.2675-.195957.55781-.339036.83747-.418352 1.65216-.576983 3.08696.580094 3.10216.59098C11.8583.810265 11.9251.870918 11.9859.931571 12.8796 1.8507 13.0301 2.59565 13.0301 3.91602L13.0271 3.91913z" fill="#285D60"/>
                <path d="M22.835 4.69362c0 2.58787-2.0868 4.69363-4.6509 4.69363-2.5641.0-4.6509-2.10576-4.6509-4.69363C13.5332 2.10575 15.62.0 18.1841.0c2.5641.0 4.6509 2.10575 4.6509 4.69362zm-2.6234.0C20.2116 3.5661 19.3027 2.64697 18.1841 2.64697s-2.0275.91757-2.0275 2.04665C16.1566 5.82271 17.0655 6.74028 18.1841 6.74028s2.0275-.91757 2.0275-2.04666z" fill="#285D60"/>
                <path d="M30.0006 6.53132C29.9778 6.85013 29.8988 7.18761 29.762 7.53909c-.532 1.15863-1.7616 1.84915-3.2906 1.84915C26.2601 9.38824 26.0428 9.37424 25.8254 9.34936 25.1369 9.26693 24.535 9.07875 24.0365 8.79259 23.5228 8.43645 23.1321 7.94034 22.8677 7.31359 22.8312 7.22961 22.8798 7.13163 22.968 7.11296L25.4044 6.57642C25.4606 6.56398 25.5199 6.58886 25.5518 6.63707 25.7221 6.89835 26.0124 7.02432 26.1704 7.04454 26.5428 7.08964 26.7358 6.98855 26.8331 6.89368 26.9304 6.79881 26.976 6.66973 26.9577 6.52976 26.9197 6.21405 26.7343 6.06786 25.792 5.60752L25.7798 5.6013C25.5929 5.50954 25.3588 5.39601 25.0974 5.26382 24.918 5.1845 24.7417 5.09741 24.5791 5.00877L24.5654 5.00099C24.5426 4.98699 24.5198 4.973 24.494 4.959 23.6489 4.46289 23.1549 3.85947 23.0273 3.16429 22.8464 2.17051 23.4696 1.32758 23.5972 1.16895 23.7857.951222 24.0061.759932 24.2508.599745 24.9895.11763 25.944-.0829922 26.9365.0367589 27.5307.108299 28.0703.271596 28.54.52354 28.7634.643291 28.9701.784815 29.1555.945002 29.2832 1.06009 29.6814 1.46444 29.8045 2.08186 29.8197 2.15962 29.7696 2.23583 29.6936 2.25293l-2.3984.49612C27.2268 2.76304 27.1614 2.72416 27.1356 2.65884 27.0687 2.48777 26.9213 2.3167 26.6036 2.27782 26.3939 2.25293 26.2039 2.3167 26.0823 2.45356 25.9911 2.55775 25.9516 2.68684 25.982 2.79415 26.0276 2.95744 26.1917 3.21716 27.0869 3.58886 27.2648 3.6604 27.4274 3.72416 27.5915 3.79259 27.7998 3.8688 28.0019 3.95122 28.1904 4.03676 28.7603 4.30892 30.0766 5.09741 29.9991 6.53443L30.0006 6.53132z" fill="#285D60"/>
                <path d="M47.9903.191291 45.0934 8.17418 43.8091 11.9036C43.7893 11.9611 43.7361 11.9984 43.6769 11.9984H40.9562C40.8605 11.9984 40.7936 11.902 40.824 11.8103l1.0654-3.23176C41.9001 8.54743 41.8986 8.51477 41.8894 8.48367L38.8329.192846C38.7995.0995334 38.8664.0 38.9652.0h2.4379C41.4624.0 41.514.037325 41.5353.0933126L43.2741 4.65163C43.3197 4.7776 43.4945 4.77605 43.537 4.64852L45.1481.096423C45.1679.0388802 45.2211.0 45.2803.0h2.5778C47.9554.0 48.0222.0979782 47.9903.191291z" fill="#285D60"/>
                <path d="M39.1173 6.65941C38.3786 8.2675 36.7645 9.38569 34.895 9.38569c-2.564.0-4.6509-2.10575-4.6509-4.69207C30.2441 2.10731 32.331.0 34.895.0c2.5641.0 4.6509 2.10575 4.6509 4.69207C39.5459 4.97667 39.5201 5.25505 39.473 5.52566 39.4608 5.59409 39.4015 5.64541 39.3331 5.64541H33.1988C33.0894 5.64541 33.0225 5.76672 33.0788 5.86314 33.4557 6.51788 34.1305 6.92379 34.8768 6.92379 35.5106 6.92379 36.1018 6.63764 36.5229 6.08709 36.5548 6.0451 36.6064 6.02333 36.6581 6.03266l2.3498.43235C39.0991 6.48211 39.1553 6.5832 39.1158 6.66874M36.8071 3.50389C36.6976 2.84292 35.9514 2.32815 35.0014 2.32815 34.1381 2.32815 33.3189 2.83981 33.1973 3.50078 33.1806 3.58942 33.2475 3.6703 33.3356 3.6703h3.3332C36.7554 3.6703 36.8223 3.58942 36.8071 3.50233V3.50389z" fill="#285D60"/>
              </g>
              <defs>
                <clipPath id="clip0_1214_10948">
                  <rect width="48" height="12" fill="#fff"/>
                </clipPath>
              </defs>
            </svg>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="header-nav__wrap hidden lg:flex ml-4">
            <ul className="header-nav__list flex items-center">
              
              {/* Platform Dropdown Link */}
              <li className="header-nav__item flex relative mr-1007" ref={dropdownRef}>
                <button 
                  onClick={() => setIsPlatformOpen(!isPlatformOpen)}
                  id="header-nav-platform" 
                  className="header-nav__link block text-nav-mobile md:text-nav-tablet lg:text-nav-desktop hover:text-green cursor-pointer select-none focus:outline-none"
                >
                  Platform
                </button>
                <div className="divider ml-3 absolute top-0 right-0 w-1"></div>

                {/* Dropdown Panel */}
                <div className={`absolute left-[-150px] z-50 mt-1040 flex w-screen max-w-max px-4 transition-all duration-200 origin-top-left ${isPlatformOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}>
                  <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-main_white text-sm leading-6 shadow-xl ring-1 ring-gray-900/5 lg:max-w-3xl">
                    <div className="px-8 py-8 bg-[#FCFBFA]">
                      <div className="flex items-center gap-x-3">
                        <h3 className="text-h6-mobile md:text-h6-tablet lg:text-h6-desktop text-main_green font-bold">The Platform for State and Local Compliance</h3>
                      </div>
                      <p className="mt-2 text-p2-mobile md:text-p2-tablet lg:text-p2-desktop text-main_green/70">
                        See how Mosey helps businesses implement a comprehensive state and local compliance program that lowers the cost of compliance, reduces employment risk, and avoids costly penalties.
                      </p>
                      <Link href="/platform/" className="inline-block mt-2 text-p2-mobile md:text-p2-tablet lg:text-p2-desktop text-green hover:text-main_green/70 underline font-medium">
                        Learn more
                      </Link>
                    </div>

                    {/* Submenu Grid */}
                    <div className="bg-[#F3F1EC] grid grid-cols-1 gap-x-6 gap-y-1 p-4 py-6 lg:grid-cols-2">
                      {/* Sub-item 1 */}
                      <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-white transition-colors duration-200">
                        <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-[#FCFBFA] group-hover:bg-[#F3F1EC]">
                          <img src="/img-theme-assets/home/compliance/icon/compliance.svg" alt="" className="w-6 h-6" />
                        </div>
                        <div>
                          <Link href="/platform/payroll-compliance/" className="text-p1-mobile md:text-p1-tablet lg:text-p1-desktop text-main_green font-bold block group-hover:text-green">
                            Payroll Compliance
                            <span className="absolute inset-0"></span>
                          </Link>
                          <p className="mt-1 text-p2-mobile md:text-p2-tablet lg:text-p2-desktop text-main_green/70">
                            State and local tax registration and monitoring.
                          </p>
                        </div>
                      </div>

                      {/* Sub-item 2 */}
                      <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-white transition-colors duration-200">
                        <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-[#FCFBFA] group-hover:bg-[#F3F1EC]">
                          <img src="/img-theme-assets/home/compliance/icon/letter.svg" alt="" className="w-6 h-6" />
                        </div>
                        <div>
                          <Link href="/platform/handbooks/" className="text-p1-mobile md:text-p1-tablet lg:text-p1-desktop text-main_green font-bold flex items-center gap-x-2 group-hover:text-green">
                            <span className="text-[10px] tracking-wider uppercase bg-green text-white px-2 py-0.5 rounded-full font-bold">New</span>
                            <span>Employee Handbooks</span>
                            <span className="absolute inset-0"></span>
                          </Link>
                          <p className="mt-1 text-p2-mobile md:text-p2-tablet lg:text-p2-desktop text-main_green/70">
                            Keep employee handbooks up-to-date automatically.
                          </p>
                        </div>
                      </div>

                      {/* Sub-item 3 */}
                      <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-white transition-colors duration-200">
                        <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-[#FCFBFA] group-hover:bg-[#F3F1EC]">
                          <img src="/img-theme-assets/home/compliance/icon/founding.svg" alt="" className="w-6 h-6" />
                        </div>
                        <div>
                          <Link href="/platform/entity-compliance/" className="text-p1-mobile md:text-p1-tablet lg:text-p1-desktop text-main_green font-bold block group-hover:text-green">
                            Entity Compliance
                            <span className="absolute inset-0"></span>
                          </Link>
                          <p className="mt-1 text-p2-mobile md:text-p2-tablet lg:text-p2-desktop text-main_green/70">
                            Stay in good standing with the Secretary of State.
                          </p>
                        </div>
                      </div>

                      {/* Sub-item 4 */}
                      <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-white transition-colors duration-200">
                        <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-[#FCFBFA] group-hover:bg-[#F3F1EC]">
                          <img src="/img-theme-assets/home/compliance/icon/automate.svg" alt="" className="w-6 h-6" />
                        </div>
                        <div>
                          <Link href="/platform/tax-compliance/" className="text-p1-mobile md:text-p1-tablet lg:text-p1-desktop text-main_green font-bold block group-hover:text-green">
                            Tax Compliance
                            <span className="absolute inset-0"></span>
                          </Link>
                          <p className="mt-1 text-p2-mobile md:text-p2-tablet lg:text-p2-desktop text-main_green/70">
                            Detect nexus for sales tax, corporate income tax, and local business taxes.
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </li>

              {/* Pricing */}
              <li className="header-nav__item flex relative mr-1007">
                <Link href="/pricing/" className="header-nav__link block text-nav-mobile md:text-nav-tablet lg:text-nav-desktop hover:text-green">
                  Pricing
                </Link>
                <div className="divider"></div>
              </li>

              {/* Resources */}
              <li className="header-nav__item flex relative mr-1007">
                <Link href="/resources/" className="header-nav__link block text-nav-mobile md:text-nav-tablet lg:text-nav-desktop hover:text-green">
                  Resources
                </Link>
                <div className="divider"></div>
              </li>

              {/* About */}
              <li className="header-nav__item flex relative mr-1007">
                <Link href="/about/" className="header-nav__link block text-nav-mobile md:text-nav-tablet lg:text-nav-desktop hover:text-green">
                  About
                </Link>
                <div className="divider"></div>
              </li>

              {/* Blog */}
              <li className="header-nav__item flex relative mr-1007">
                <Link href="/blog/" className="header-nav__link block text-nav-mobile md:text-nav-tablet lg:text-nav-desktop hover:text-green">
                  Blog
                </Link>
                <div className="divider"></div>
              </li>

              {/* Handbooks (with New Badge) */}
              <li className="header-nav__item flex relative mr-1007">
                <Link href="/platform/handbooks/" className="header-nav__link text-nav-mobile md:text-nav-tablet lg:text-nav-desktop flex items-center gap-x-2 hover:text-green">
                  <span className="text-[10px] tracking-wider uppercase bg-green text-white px-2 py-0.5 rounded-full font-bold">New</span>
                  <span>Handbooks</span>
                </Link>
              </li>

            </ul>
          </nav>
        </div>

        {/* Right Section: Sign In & Mobile Toggle */}
        <div className="header-wrap__right">
          <div className="header-btn__wrap flex items-center">
            {/* Desktop Sign In */}
            <Link 
              href="https://app.mosey.com/login" 
              className="btn btn-transparent text-button-large-mobile md:text-button-large-tablet lg:text-button-large-desktop hidden lg:block mr-1006 font-medium"
            >
              Sign In
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
      <div className={`fixed inset-0 bg-[#203435]/40 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className={`absolute top-0 right-0 w-4/5 max-w-sm h-full bg-[#FCFBFA] shadow-2xl p-6 flex flex-col justify-between transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="pt-16">
            <ul className="flex flex-col gap-6 text-lg font-bold text-main_green">
              <li>
                <button 
                  onClick={() => setIsPlatformOpen(!isPlatformOpen)}
                  className="flex justify-between items-center w-full text-left"
                >
                  <span>Platform</span>
                  <svg className={`w-4 h-4 transition-transform ${isPlatformOpen ? 'transform rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {/* Platform Sub-links */}
                <div className={`overflow-hidden transition-all duration-300 ${isPlatformOpen ? 'max-h-60 mt-4 pl-4' : 'max-h-0'}`}>
                  <ul className="flex flex-col gap-3 text-sm font-medium text-main_green/70">
                    <li><Link href="/platform/payroll-compliance/" onClick={() => setIsMobileMenuOpen(false)}>Payroll Compliance</Link></li>
                    <li><Link href="/platform/handbooks/" onClick={() => setIsMobileMenuOpen(false)}>Employee Handbooks</Link></li>
                    <li><Link href="/platform/entity-compliance/" onClick={() => setIsMobileMenuOpen(false)}>Entity Compliance</Link></li>
                    <li><Link href="/platform/tax-compliance/" onClick={() => setIsMobileMenuOpen(false)}>Tax Compliance</Link></li>
                  </ul>
                </div>
              </li>
              <li><Link href="/pricing/" onClick={() => setIsMobileMenuOpen(false)}>Pricing</Link></li>
              <li><Link href="/resources/" onClick={() => setIsMobileMenuOpen(false)}>Resources</Link></li>
              <li><Link href="/about/" onClick={() => setIsMobileMenuOpen(false)}>About</Link></li>
              <li><Link href="/blog/" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link></li>
            </ul>
          </div>

          <div className="pb-8">
            <Link 
              href="https://app.mosey.com/login" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center py-3 bg-green text-[#FCFBFA] rounded-full font-bold shadow hover:bg-main_green transition-colors"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
