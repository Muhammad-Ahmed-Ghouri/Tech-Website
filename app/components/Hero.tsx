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
    <section className="hero-section bg-[#FCFBFA] h-full flex flex-col overflow-hidden" id="homepage-hero">
      <div className="section-container flex-1 flex flex-col justify-between py-4 md:py-6 lg:py-8">
        
        {/* Showcase & Tab Selector Navigation */}
        <div className="tabs-wrap flex-1 flex flex-col justify-between items-center w-full overflow-hidden mt-2">
          
          {/* Lottie Animation Showcase Display */}
          <AnimatedShowcase 
            activeTab={activeTab} 
            onProgress={handleProgress}
            onComplete={handleComplete}
          />

          {/* Dynamic Tab Switches */}
          <ul className="tab-links relative flex justify-between w-full max-w-[340px] md:max-w-[480px] lg:max-w-[620px] px-1017 md:px-1035 border-t border-[#CFD7D4]/50 pt-2 mt-4">
            
            {/* Tab Link 1 */}
            <li 
              onClick={() => handleTabClick(1)}
              className={`tab-link flex py-1009 items-center cursor-pointer select-none transition-all duration-300 ${activeTab === 1 ? 'opacity-100 font-bold' : 'opacity-40 hover:opacity-75'}`}
            >
              <span className="text-segment-mobile md:text-segment-tablet lg:text-segment-desktop text-main_green">
                Initial Setup
              </span>
              <svg width="15" height="15" viewBox="0 0 15 15" className="timer-svg ml-1005 w-1012 h-1012">
                <circle cx="7.5" cy="7.5" r="6" stroke="#CFD7D4" strokeWidth="1.5" fill="none" />
                <circle 
                  cx="7.5" 
                  cy="7.5" 
                  r="6" 
                  stroke="#285D60" 
                  strokeWidth="1.5" 
                  fill="none" 
                  strokeDasharray="37.7" 
                  strokeDashoffset={activeTab === 1 ? strokeDashoffset : 37.7}
                  transform="rotate(-90 7.5 7.5)"
                />
              </svg>
            </li>

            {/* Tab Link 2 */}
            <li 
              onClick={() => handleTabClick(2)}
              className={`tab-link flex py-1009 items-center cursor-pointer select-none transition-all duration-300 ${activeTab === 2 ? 'opacity-100 font-bold' : 'opacity-40 hover:opacity-75'}`}
            >
              <span className="text-segment-mobile md:text-segment-tablet lg:text-segment-desktop text-main_green">
                Ongoing
              </span>
              <svg width="15" height="15" viewBox="0 0 15 15" className="timer-svg ml-1005 w-1012 h-1012">
                <circle cx="7.5" cy="7.5" r="6" stroke="#CFD7D4" strokeWidth="1.5" fill="none" />
                <circle 
                  cx="7.5" 
                  cy="7.5" 
                  r="6" 
                  stroke="#285D60" 
                  strokeWidth="1.5" 
                  fill="none" 
                  strokeDasharray="37.7" 
                  strokeDashoffset={activeTab === 2 ? strokeDashoffset : 37.7}
                  transform="rotate(-90 7.5 7.5)"
                />
              </svg>
            </li>

            {/* Tab Link 3 */}
            <li 
              onClick={() => handleTabClick(3)}
              className={`tab-link flex py-1009 items-center cursor-pointer select-none transition-all duration-300 ${activeTab === 3 ? 'opacity-100 font-bold' : 'opacity-40 hover:opacity-75'}`}
            >
              <span className="text-segment-mobile md:text-segment-tablet lg:text-segment-desktop text-main_green">
                Recurring
              </span>
              <svg width="15" height="15" viewBox="0 0 15 15" className="timer-svg ml-1005 w-1012 h-1012">
                <circle cx="7.5" cy="7.5" r="6" stroke="#CFD7D4" strokeWidth="1.5" fill="none" />
                <circle 
                  cx="7.5" 
                  cy="7.5" 
                  r="6" 
                  stroke="#285D60" 
                  strokeWidth="1.5" 
                  fill="none" 
                  strokeDasharray="37.7" 
                  strokeDashoffset={activeTab === 3 ? strokeDashoffset : 37.7}
                  transform="rotate(-90 7.5 7.5)"
                />
              </svg>
            </li>

            {/* Sliding Indicator Line */}
            <div className="position-wrap absolute w-full flex items-center h-1004 left-0 bottom-0 md:bottom-[-2px] px-1017 md:px-1035">
              <div className="position-line absolute left-0 right-0 bg-[#CFD7D4] opacity-30 h-1001"></div>
              
              {/* Framer motion sliding underline indicator */}
              <motion.div 
                className="absolute bg-green h-1002 md:h-1004 rounded-2gem"
                animate={{
                  left: activeTab === 1 
                    ? '10%' 
                    : activeTab === 2 
                    ? '45%' 
                    : '80%',
                  width: activeTab === 1 
                    ? '18%' 
                    : activeTab === 2 
                    ? '14%' 
                    : '14%'
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            </div>

          </ul>

        </div>

      </div>
    </section>
  );
}
