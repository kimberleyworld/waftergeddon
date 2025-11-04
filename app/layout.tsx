import type { Metadata } from "next";
import Navigation from "./components/Navigation";
import "./globals.css";

export const metadata = {
  title: 'Waftegeddon',
  description: 'Confessions and events',
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
      </head>
      <body className="antialiased font-sans">
         <Navigation /> 
        {children}
      </body>
    </html>
  );
}
