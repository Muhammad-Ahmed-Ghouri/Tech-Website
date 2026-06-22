'use client';

import React, { useEffect, useRef, useState } from 'react';
import lottie from 'lottie-web';
import { motion, AnimatePresence } from 'framer-motion';

// Lightweight Client-side Lottie Player with progress and completion callbacks
function LottiePlayer({
  path,
  onProgress,
  onComplete,
}: {
  path: string;
  onProgress: (progress: number) => void;
  onComplete: () => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<any>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Reset progress to 0 initially
    onProgress(0);

    const anim = lottie.loadAnimation({
      container: containerRef.current,
      renderer: 'svg',
      loop: false, // Play once per state
      autoplay: true,
      path: path,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid meet',
      },
    });

    animRef.current = anim;

    const handleEnterFrame = () => {
      if (anim.totalFrames > 0) {
        const pct = (anim.currentFrame / anim.totalFrames) * 100;
        onProgress(pct);
      }
    };

    const handleComplete = () => {
      onComplete();
    };

    anim.addEventListener('enterFrame', handleEnterFrame);
    anim.addEventListener('complete', handleComplete);

    return () => {
      anim.removeEventListener('enterFrame', handleEnterFrame);
      anim.removeEventListener('complete', handleComplete);
      anim.destroy();
      animRef.current = null;
    };
  }, [path, onProgress, onComplete]);

  return <div ref={containerRef} className="w-full h-full" />;
}

interface AnimatedShowcaseProps {
  activeTab: number;
  onProgress: (progress: number) => void;
  onComplete: () => void;
}

export default function AnimatedShowcase({
  activeTab,
  onProgress,
  onComplete,
}: AnimatedShowcaseProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // Check screen width for responsive sizing
    const media = window.matchMedia('(min-width: 1024px)');
    setIsDesktop(media.matches);

    const listener = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    media.addEventListener('change', listener);

    return () => media.removeEventListener('change', listener);
  }, []);

  if (!isMounted) {
    // Return a stable placeholder container to prevent layout shift during SSR hydration
    return (
      <div className="w-full max-w-[1800px] aspect-[1440/566] mx-auto" />
    );
  }

  // Construct path based on current active tab and viewport size
  const folder = isDesktop ? `part_${activeTab}` : `part_${activeTab}_mobile`;
  const path = `/lottie/${folder}/part_${activeTab}.json`;

  return (
    <div className="tabs-wrap flex-1 flex flex-col justify-center items-center relative w-full overflow-hidden">
      <div className="tab-items w-full relative flex justify-center items-center overflow-hidden">
        <div
          className={`w-full mx-auto flex justify-center items-center px-4 ${isDesktop
              ? 'max-w-[1800px] aspect-[1440/566]'
              : 'max-w-[1000px] aspect-[904/804]'
            }`}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeTab}-${isDesktop}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="w-full h-full flex justify-center items-center"
            >
              <LottiePlayer
                path={path}
                onProgress={onProgress}
                onComplete={onComplete}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
