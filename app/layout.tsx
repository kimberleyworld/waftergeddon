import ConditionalNavigation from "./components/ConditionalNavigation";
import "./globals.css";

export const metadata = {
  metadataBase: new URL(process.env.NODE_ENV === 'production' 
    ? 'https://waftergeddon.vercel.app' // Replace with your actual domain
    : 'http://localhost:3000'
  ),
  title: 'Waftergeddon',
  description: 'Info for attendees of Waftergeddon 2025 and a place to confess your sins',
  openGraph: {
    title: 'Waftergeddon',
    description: 'Info for attendees of Waftergeddon 2025 and a place to confess your sins',
    images: [
      {
        url: '/images/pinkCastle.png',
        width: 1200,
        height: 630,
        alt: 'Waftergeddon Event',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Waftergeddon',
    description: 'Info for attendees of Waftergeddon 2025 and a place to confess your sins',
    images: ['/images/pinkCastle.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.cdnfonts.com/css/cloister-black" rel="stylesheet" />
        <link rel="icon" href="/images/favicon.svg" sizes="46x46" type="image/svg" />
        <link rel="icon" href="/images/favicon.svg" sizes="16x16" type="image/svg" />
        <link rel="apple-touch-icon" href="/images/favicon.svg" sizes="180x180" />
      </head>
      <body className="antialiased font-sans">
         <ConditionalNavigation /> 
        {children}
      </body>
    </html>
  );
}
