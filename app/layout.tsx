import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "SwapKam | Business, Money & Growth Strategies",
//   description: "Learn real frameworks for building wealth, starting businesses, and mastering the stock market. Practical insights from an entrepreneur who's done it all.",
//   keywords: ["business", "entrepreneurship", "wealth building", "stock market", "money mindset", "personal growth", "trading", "financial freedom"],
//   authors: [{ name: "SwapKam" }],
//   creator: "SwapKam",
//   metadataBase: new URL("https://swapkam.com"),
//   openGraph: {
//     type: "website",
//     locale: "en_US",
//     url: "https://swapkam.com",
//     title: "SwapKam | Business, Money & Growth Strategies",
//     description: "Learn real frameworks for building wealth, starting businesses, and mastering the stock market.",
//     siteName: "SwapKam",
//     images: [
//       {
//         url: "https://swapkam.com/og-image.png",
//         width: 1200,
//         height: 630,
//         alt: "SwapKam - Business and Wealth Building",
//         type: "image/png",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "SwapKam | Business, Money & Growth Strategies",
//     description: "Learn real frameworks for building wealth, starting businesses, and mastering the stock market.",
//     images: ["https://swapkam.com/og-image.png"],
//     creator: "@swapkam",
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-snippet": -1,
//       "max-image-preview": "large",
//       "max-video-preview": -1,
//     },
//   },
//   alternates: {
//     canonical: "https://swapkam.com",
//   },
// };

export const metadata: Metadata = {
  title: "Swap Kam",
  description:
    "Creative Short Form Video Editor & Content Strategist, helping creators and brands grow on Social Media. Skilled in high-retention video editing, content structuring, and platform-specific growth strategy.",
  openGraph: {
    title: "Swap Kam",
    description:
      "Creative Short Form Video Editor & Content Strategist, helping creators and brands grow on Social Media. Skilled in high-retention video editing, content structuring, and platform-specific growth strategy.",
    url: "https://swapkam.com",
    siteName: "SwapKam",
    images: [
      {
        url: "https://swapkam.com/profile.png",
        width: 1200,
        height: 630,
        alt: "Swap Kam Profile Picture",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Swap Kam",
    description:
      "Creative Short Form Video Editor & Content Strategist, helping creators and brands grow on Social Media. Skilled in high-retention video editing, content structuring, and platform-specific growth strategy.",
    images: ["https://swapkam.com/profile.png"],
    creator: "@swapkams",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body>
        <Header />
        <div className="container mx-auto">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
