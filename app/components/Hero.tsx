'use client';

import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import AnimatedShowcase from './AnimatedShowcase';

export default function Hero() {
  const [activeTab, setActiveTab] = useState(1);
  const [progress, setProgress] = useState(0);

  // Memoized progress callback to prevent LottiePlayer from reloading on state updates
  const handleProgress = useCallback((pct: number) => {
    setProgress(pct);
  }, []);

  // Memoized complete callback to advance activeTab and reset progress
  const handleComplete = useCallback(() => {
    setActiveTab((prevTab) => (prevTab % 3) + 1);
    setProgress(0);
  }, []);

  const handleTabClick = (tabId: number) => {
    setActiveTab(tabId);
    setProgress(0);
  };

  // Circumference of the timer circle: 2 * PI * r (r=6) => 37.7
  const strokeDashoffset = 37.7 - (37.7 * progress) / 100;

  return (
    <section className="hero-section bg-white h-full flex flex-col overflow-hidden" id="homepage-hero">
      <div className="section-container relative flex-1 flex flex-col justify-between py-4 md:py-6 lg:py-8">

        {/* Title and Description block */}
        <div className="title-wrap absolute top-4 md:top-6 lg:top-8 left-0 w-full flex flex-col md:flex-row justify-between pt-12 px-1017 md:px-1035 lg:px-1104 gap-4 md:gap-8 pb-4 z-10 pointer-events-none">
          <div className="flex flex-col">
            {/* Small caps badge */}
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1 h-[1px] bg-main_green"></span>
              <span className="text-[10px] md:text-[11px] lg:text-[12px] tracking-[0.15em] font-bold text-main_green uppercase">
                Excellence Across Multiple Disciplines
              </span>
            </div>
            {/* Main title */}
            <h1 className="text-h3-mobile md:text-h3-tablet lg:text-h3-desktop text-main_green w-full md:w-1241 lg:w-1345 font-bold leading-tight uppercase">
              <span className="text-green">Secure Your Business</span> With Us.
            </h1>
          </div>
          <div className="desc flex items-stretch">
            <p className="text-p3-mobile md:text-p3-tablet lg:text-p3-desktop w-full md:w-[320px] lg:w-1343 h-fit pl-1016 border-l-[1px] border-green border-solid text-main_green/80 leading-relaxed py-1">
              Your preferred <span className="text-green font-semibold">IT Solution</span> partner, delivering cutting edge infrastructure and digital threat protection.
            </p>
          </div>
        </div>

        {/* Showcase & Tab Selector Navigation */}
        <div className="tabs-wrap flex-1 flex flex-col justify-between items-center w-full overflow-hidden mt-2">

          {/* Lottie Animation Showcase Display */}
          <AnimatedShowcase
            activeTab={activeTab}
            onProgress={handleProgress}
            onComplete={handleComplete}
          />

        </div>

      </div>
    </section>
  );
}
