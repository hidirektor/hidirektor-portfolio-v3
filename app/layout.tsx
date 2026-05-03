import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Halil İbrahim Direktör | Software Architect",
  description:
    "Halil İbrahim Direktör — Software Architect. Personal portfolio showcasing projects, skills and experience.",
  openGraph: {
    title: "Halil İbrahim Direktör | Software Architect",
    description:
      "Software Architect & Full Stack Developer specializing in mobile, backend, IoT solutions and scalable systems.",
    type: "website",
    url: "https://hidirektor.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
