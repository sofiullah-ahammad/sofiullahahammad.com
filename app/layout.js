import '../styles/framer.css';
import FramerHydration from '../components/FramerHydration';

export const metadata = {
  title: 'Magnetto - Stylish Portfolio Template',
  description: 'A bold, modern portfolio template designed for creatives by FutureThings.',
};

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

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-redirect-timezone="1">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="generator" content="Framer 90e1d28" />
        <link href="/images/KdMNQYLrg8zOxJbNubd1kKdOE4Q.svg" rel="icon" media="(prefers-color-scheme: light)" />
        <link href="/images/ZoIlzkbx4SFvVtBaEzODlurkUas.svg" rel="icon" media="(prefers-color-scheme: dark)" />
        {preloads.map((href) => (
          <link key={href} rel="modulepreload" href={href} />
        ))}
        <script type="module" src="/js/script_main.BmKQoGIq.mjs" data-framer-bundle="main" />
      </head>
      <body>
        {children}
        <FramerHydration />
      </body>
    </html>
  );
}

