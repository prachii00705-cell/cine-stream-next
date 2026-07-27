import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "🎬 Cine Stream",
    template: "%s | Cine Stream",
  },
  description:
    "Discover thousands of movies powered by TMDB. Search, explore and save your favorite movies.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>

        <nav className="navbar">
          <Link href="/">🎬 Cine Stream</Link>

          <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/favorites">Favorites</Link>
          </div>
        </nav>

        {children}

        <Footer />

      </body>
    </html>
  );
}
