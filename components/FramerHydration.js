'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

export default function FramerHydration() {
  useEffect(() => {
    // 1. Initialize Lenis Smooth Scroll for silky smooth momentum scrolling
    let lenis;
    try {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1.0,
        touchMultiplier: 2.0,
        infinite: false,
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    } catch (e) {
      console.warn('Lenis smooth scroll init warning:', e);
    }

    // 2. Set process env fallback if needed by Framer runtime
    if (typeof window !== 'undefined') {
      window.process = {
        ...window.process,
        env: {
          ...window.process?.env,
          NODE_ENV: 'production'
        }
      };
    }

    // 3. Preload runtime modules if not already present
    const preloads = [
      '/js/rolldown-runtime.Dh6celcD.mjs',
      '/js/react.Di4Y5Kvy.mjs',
      '/js/motion.C5FTWTVt.mjs',
      '/js/framer.D1u_lfy5.mjs',
      '/js/aB8W1_bGo.CxwA16ZN.mjs',
      '/js/N89tqOzgx.N4t581kx.mjs',
      '/js/QjWLztjxW.TFy0Z6av.mjs',
      '/js/R1K60oWJQ.SJzyV1j_.mjs',
      '/js/yapCj9upi.CaVfhKhv.mjs',
      '/js/shared-lib.Bxdkf57l.mjs',
      '/js/Material._9DQXGgp.mjs',
      '/js/HSeVcgIo4.CQ0TOSyO.mjs',
      '/js/rH96PUSIJCf0-7STbL2iyvomhKiePV0g9y-xbNIHBqU.Cx6EYhiU.mjs',
      '/js/Counter1._A-IM8Om.mjs',
      '/js/nyqmANIJs.UfY21NAw.mjs',
      '/js/V6_H8eRx1.DKVaodGl.mjs',
      '/js/uzWK8MvgF.EfHjCh_X.mjs',
      '/js/GrphFlRqQ.CzRo7KpA.mjs',
      '/js/bVJcKqhxH.D-C-4o1v.mjs',
      '/js/Qil1yMJhiZe7C8KPSTPWWQFxGzKPYcf7x0nNn7t9tyc.BJ-D2kMu.mjs'
    ];

    preloads.forEach((href) => {
      if (!document.querySelector(`link[href="${href}"]`)) {
        const link = document.createElement('link');
        link.rel = 'modulepreload';
        link.href = href;
        document.head.appendChild(link);
      }
    });

    // 4. Append main script if not already added (Disabled to preserve Next.js JSX section ordering)
    // const scriptSrc = '/js/script_main.BmKQoGIq.mjs';
    // if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
    //   const script = document.createElement('script');
    //   script.type = 'module';
    //   script.async = true;
    //   script.src = scriptSrc;
    //   script.setAttribute('data-framer-bundle', 'main');
    //   document.body.appendChild(script);
    // }

    return () => {
      if (lenis) {
        lenis.destroy();
      }
    };
  }, []);

  return null;
}
