import '../styles/framer.css';
import FramerHydration from '../components/FramerHydration';

export const metadata = {
  title: 'Sofiullah Ahammad - Personal Portfolio',
  description: 'A bold, modern portfolio template designed for creatives by FutureThings.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-redirect-timezone="1">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="generator" content="Framer 90e1d28" />
        <link href="/images/KdMNQYLrg8zOxJbNubd1kKdOE4Q.svg" rel="icon" media="(prefers-color-scheme: light)" />
        <link href="/images/ZoIlzkbx4SFvVtBaEzODlurkUas.svg" rel="icon" media="(prefers-color-scheme: dark)" />
      </head>
      <body>
        {children}
        <FramerHydration />
      </body>
    </html>
  );
}
