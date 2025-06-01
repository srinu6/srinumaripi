import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://srinumaripi.tech'),
  title: {
    default: "Srinu Maripi | Senior Software Engineer",
    template: "%s | Srinu Maripi"
  },
  description: "Senior Software Engineer with 5+ years of experience in React, React Native, and Full Stack Development. Building scalable web and mobile applications.",
  keywords: [
    "Srinu Maripi",
    "Senior Software Engineer",
    "Frontend Developer",
    "Full Stack Developer",
    "React Native Developer",
    "Web Development",
    "Mobile Development",
    "JavaScript",
    "TypeScript",
    "React JS",
    "React Native",
    "Next.js",
    "Node.js",
    "Express.js",
    "Portfolio"
  ],
  authors: [{ name: "Srinu Maripi" }],
  creator: "Srinu Maripi",
  publisher: "Srinu Maripi",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://srinumaripi.tech",
    title: "Srinu Maripi | Senior Software Engineer",
    description: "Senior Software Engineer with 5+ years of experience in React, React Native, and Full Stack Development. Building scalable web and mobile applications.",
    siteName: "Srinu Maripi Portfolio",
    images: [
      {
        url: "https://srinumaripi.tech/dp.JPG",
        width: 630,
        height: 630,
        alt: "Srinu Maripi - Senior Software Engineer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Srinu Maripi | Senior Software Engineer",
    description: "Senior Software Engineer with 5+ years of experience in React, React Native, and Full Stack Development. Building scalable web and mobile applications.",
    images: ["https://srinumaripi.tech/dp.JPG"],
    creator: "@MaripiSri"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
   // google: "your-google-site-verification", // Add your Google Search Console verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://srinumaripi.tech" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
