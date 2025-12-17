import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "David Snowden | Software Developer & CS Student",
  description:
    "Portfolio of David Snowden - Computer Science student at Hanover College specializing in software development, IT infrastructure, and security.",
  keywords: [
    "David Snowden",
    "Software Developer",
    "Computer Science",
    "Hanover College",
    "Full Stack Developer",
    "IT Security",
    "Web Development",
  ],
  authors: [{ name: "David Snowden" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://davidsnowden.dev",
    title: "David Snowden | Software Developer",
    description:
      "Portfolio of David Snowden - Computer Science student specializing in software development and IT security",
    siteName: "David Snowden Portfolio",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrains.variable} font-body bg-dark-bg text-dark-text antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
