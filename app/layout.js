import '../styles/framer.css';
import FramerHydration from '../components/FramerHydration';

export const metadata = {
  title: 'Sofiullah Ahammad - Personal Portfolio',
  description: 'Personal portfolio of Sofiullah Ahammad - Creative design, branding & digital craftsmanship.',
  icons: {
    icon: 'https://i.postimg.cc/Y9y8TFJr/SA-1.png',
    shortcut: 'https://i.postimg.cc/Y9y8TFJr/SA-1.png',
    apple: 'https://i.postimg.cc/Y9y8TFJr/SA-1.png',
  },
  openGraph: {
    title: 'Sofiullah Ahammad - Personal Portfolio',
    description: 'Personal portfolio of Sofiullah Ahammad - Creative design, branding & digital craftsmanship.',
    url: 'https://sofiullahahammad.com',
    siteName: 'Sofiullah Ahammad',
    images: [
      {
        url: 'https://i.postimg.cc/tgvMG8xM/profile-pic.png',
        width: 1200,
        height: 630,
        alt: 'Sofiullah Ahammad',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sofiullah Ahammad - Personal Portfolio',
    description: 'Personal portfolio of Sofiullah Ahammad - Creative design, branding & digital craftsmanship.',
    images: ['https://i.postimg.cc/tgvMG8xM/profile-pic.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-redirect-timezone="1">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://i.postimg.cc/Y9y8TFJr/SA-1.png" rel="icon" type="image/png" />
        <link href="https://i.postimg.cc/Y9y8TFJr/SA-1.png" rel="shortcut icon" />
        <link href="https://i.postimg.cc/Y9y8TFJr/SA-1.png" rel="apple-touch-icon" />
        <meta property="og:image" content="https://i.postimg.cc/tgvMG8xM/profile-pic.png" />
        <meta name="twitter:image" content="https://i.postimg.cc/tgvMG8xM/profile-pic.png" />
      </head>
      <body>
        {children}
        <FramerHydration />
      </body>
    </html>
  );
}
