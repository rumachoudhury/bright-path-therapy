import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Bright Path Speech Therapy · Eastern Long Island",
  description:
    "Private speech-language pathology practice for children and adults on Eastern Long Island. In-person and teletherapy sessions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="bg-paper text-ink font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
