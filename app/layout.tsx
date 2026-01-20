import './globals.css';
import { Raleway } from 'next/font/google';
import Link from 'next/link';
import { Analytics } from "@vercel/analytics/next"

const raleway = Raleway({ 
  subsets: ['latin'],
  weight: ['300','400'],
  display: 'swap',
});

export const metadata = {
  title: 'Janet Zhang Media',
  description: 'Janet Zhang Media Portfolio',
  icons: {
    icon: '/images/blackCamera.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentYear = new Date().getFullYear();

  return (
    <html lang="en" className={raleway.className}>
      <body>
        <header className="header">
          <div className="WebLogo">
            <h1>Janet Zhang Media</h1>
          </div>
          <nav className="navbar">
            <ul>
              <li><Link href="/" className="button">Portfolio</Link></li>
              <li><Link href="/about" className="button">About Me</Link></li>
              <li><Link href="/contact" className="button">Contact</Link></li>
              <li>
                <a href="https://www.instagram.com/janetzmedia/" target="_blank" className="insta-icon">
                  <img src="/images/Instagram_Glyph_Gradient.png" alt="Instagram" className="cameraIcon" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/janetzhang15/" target="_blank" className="linkedin-icon">
                  <img src="/images/InBug-Black.png" alt="LinkedIn" className="cameraIcon" />
                </a>
              </li>
            </ul>
          </nav>
        </header>

        {children}
        <footer className="footer">
          <p>© <span id="year">{currentYear}</span> Janet Zhang Media. All Rights Reserved</p>
          <div className="footer__socials">
             <p> Contact me here: (972) 202 6768</p>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}