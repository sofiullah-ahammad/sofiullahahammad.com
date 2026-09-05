import '../styles/framer.css';
import FramerHydration from '../components/FramerHydration';

export const metadata = {
  metadataBase: new URL('https://sofiullahahammad.com'),
  title: {
    default: 'Sofiullah Ahammad | Brand Identity Designer Bangladesh',
    template: '%s | Sofiullah Ahammad',
  },
  description: 'Official portfolio of Sofiullah Ahammad - Premier Brand Identity Designer & Strategist in Bangladesh crafting iconic visual identities and digital experiences.',
  keywords: [
    'Sofiullah Ahammad',
    'Sofiullah Ahammad Designer',
    'Brand Identity Designer Bangladesh',
    'Graphic Designer Bangladesh',
    'Sofiullah Ahammad Portfolio',
    'Brand Strategist Bangladesh',
    'Visual Identity Designer',
    'Logo Designer Bangladesh',
    'UI UX Designer Bangladesh'
  ],
  authors: [{ name: 'Sofiullah Ahammad', url: 'https://sofiullahahammad.com' }],
  creator: 'Sofiullah Ahammad',
  publisher: 'Sofiullah Ahammad',
  alternates: {
    canonical: 'https://sofiullahahammad.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: 'https://i.postimg.cc/Y9y8TFJr/SA-1.png',
    shortcut: 'https://i.postimg.cc/Y9y8TFJr/SA-1.png',
    apple: 'https://i.postimg.cc/Y9y8TFJr/SA-1.png',
  },
  openGraph: {
    title: 'Sofiullah Ahammad | Brand Identity Designer Bangladesh',
    description: 'Official portfolio of Sofiullah Ahammad - Premier Brand Identity Designer & Strategist in Bangladesh crafting iconic visual identities.',
    url: 'https://sofiullahahammad.com',
    siteName: 'Sofiullah Ahammad',
    images: [
      {
        url: 'https://i.postimg.cc/tgvMG8xM/profile-pic.png',
        width: 1200,
        height: 630,
        alt: 'Sofiullah Ahammad - Brand Identity Designer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sofiullah Ahammad | Brand Identity Designer Bangladesh',
    description: 'Official portfolio of Sofiullah Ahammad - Premier Brand Identity Designer & Strategist in Bangladesh.',
    creator: '@sofiullah69',
    images: ['https://i.postimg.cc/tgvMG8xM/profile-pic.png'],
  },
  verification: {
    google: 'Jc-vxQwVPd6kJz549d4gMVZyAy9Oq7oUsj7BvUlgdo0',
  },
};

const jsonLdSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://sofiullahahammad.com/#website',
      'url': 'https://sofiullahahammad.com',
      'name': 'Sofiullah Ahammad',
      'description': 'Official portfolio of Sofiullah Ahammad - Brand Identity Designer & Strategist in Bangladesh.',
      'publisher': {
        '@id': 'https://sofiullahahammad.com/#person',
      },
    },
    {
      '@type': 'Person',
      '@id': 'https://sofiullahahammad.com/#person',
      'name': 'Sofiullah Ahammad',
      'url': 'https://sofiullahahammad.com',
      'image': 'https://i.postimg.cc/tgvMG8xM/profile-pic.png',
      'jobTitle': 'Brand Identity Designer',
      'worksFor': {
        '@type': 'Organization',
        'name': 'Sofiullah Ahammad Studio',
      },
      'sameAs': [
        'https://x.com/sofiullah69',
        'https://www.instagram.com/sofiullahahammad/',
        'https://www.linkedin.com/in/sofiullah-ahammad/',
        'https://www.youtube.com/@sofiullahahammad',
        'https://www.behance.net/sofiullahammed',
        'https://www.facebook.com/SofiullahAahmmad/',
      ],
      'knowsAbout': [
        'Brand Identity Design',
        'Graphic Design',
        'UI/UX Design',
        'Visual Strategy',
        'Brand Architecture'
      ],
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Dhaka',
        'addressCountry': 'Bangladesh',
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-redirect-timezone="1">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=1280, initial-scale=0.3, maximum-scale=3.0, user-scalable=yes" />
        <meta name="google-site-verification" content="Jc-vxQwVPd6kJz549d4gMVZyAy9Oq7oUsj7BvUlgdo0" />
        <link href="https://i.postimg.cc/Y9y8TFJr/SA-1.png" rel="icon" type="image/png" />
        <link href="https://i.postimg.cc/Y9y8TFJr/SA-1.png" rel="shortcut icon" />
        <link href="https://i.postimg.cc/Y9y8TFJr/SA-1.png" rel="apple-touch-icon" />
        <meta property="og:image" content="https://i.postimg.cc/tgvMG8xM/profile-pic.png" />
        <meta name="twitter:image" content="https://i.postimg.cc/tgvMG8xM/profile-pic.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body>
        {children}
        <FramerHydration />
      </body>
    </html>
  );
}
