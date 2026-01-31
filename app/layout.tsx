import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: {
    default: "The Semantic Architect – SEO & Accessibility for Developers",
    template: "%s | The Semantic Architect",
  },
  description:
    "A practical eBook on SEO, semantic HTML, accessibility, and building future-proof web applications as a modern developer.",
  keywords: [
    "SEO for developers",
    "Web accessibility",
    "Semantic HTML",
    "Frontend best practices",
    "Developer SEO guide",
    "Accessible web design",
  ],
  authors: [{ name: "The Semantic Architect" }],
  creator: "The Semantic Architect",
  publisher: "The Semantic Architect",
  metadataBase: new URL("https://dotpro-ebook.vercel.app/"),
  openGraph: {
    title: "The Semantic Architect – SEO & Accessibility eBook",
    description:
      "Learn how to become a perfect developer by mastering SEO, accessibility, and semantic architecture.",
    url: "https://dotpro-ebook.vercel.app",
    siteName: "The Semantic Architect",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Semantic Architect eBook cover",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Semantic Architect – SEO & Accessibility eBook",
    description:
      "A developer-focused eBook on SEO, accessibility, and semantic web architecture.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground transition-colors duration-500">
         <Providers>
          {children}
          </Providers>
      </body>
    </html>
  );
}
