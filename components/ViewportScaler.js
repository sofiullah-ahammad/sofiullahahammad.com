'use client';

import React, { useEffect, useState, useRef } from 'react';

export default function ViewportScaler({ children, masterWidth = 1440 }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [scaledHeight, setScaledHeight] = useState('auto');

  useEffect(() => {
    function updateScale() {
      if (typeof window === 'undefined') return;

      const vw = Math.min(
        window.innerWidth,
        document.documentElement.clientWidth || window.innerWidth
      );

      const currentScale = vw < masterWidth ? vw / masterWidth : 1;
      setScale(currentScale);

      if (canvasRef.current) {
        const unscaledHeight = canvasRef.current.offsetHeight;
        setScaledHeight(`${unscaledHeight * currentScale}px`);
      }
    }

    updateScale();

    let resizeObserver = null;
    if (typeof ResizeObserver !== 'undefined' && canvasRef.current) {
      resizeObserver = new ResizeObserver(() => {
        updateScale();
      });
      resizeObserver.observe(canvasRef.current);
    }

    window.addEventListener('resize', updateScale);
    window.addEventListener('orientationchange', updateScale);

    const t1 = setTimeout(updateScale, 100);
    const t2 = setTimeout(updateScale, 300);
    const t3 = setTimeout(updateScale, 1000);

    return () => {
      window.removeEventListener('resize', updateScale);
      window.removeEventListener('orientationchange', updateScale);
      if (resizeObserver) resizeObserver.disconnect();
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [masterWidth]);

  return (
    <div
      ref={containerRef}
      className="viewport-scaler-wrapper"
      style={{
        width: '100%',
        maxWidth: '100vw',
        height: scaledHeight,
        overflowX: 'hidden',
        overflowY: 'visible',
        position: 'relative',
        margin: '0 auto',
      }}
    >
      <div
        ref={canvasRef}
        id="master-desktop-canvas"
        style={{
          width: `${masterWidth}px`,
          minWidth: `${masterWidth}px`,
          maxWidth: `${masterWidth}px`,
          position: 'relative',
          top: 0,
          left: '50%',
          transform: `translateX(-50%) scale(${scale})`,
          transformOrigin: 'top center',
          boxSizing: 'border-box',
          willChange: 'transform',
        }}
      >
        {children}
      </div>
    </div>
  );
}
