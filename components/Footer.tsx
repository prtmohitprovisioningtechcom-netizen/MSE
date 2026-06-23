import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-12 bg-primary/5 text-primary py-8 border-t border-primary/20 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-sm font-medium">
          © {new Date().getFullYear()} MSE
          <br />
          Association. All rights reserved.
        </div>
        <nav className="flex gap-6 text-sm">
          <Link href="/" className="hover:underline hover:text-secondary transition-colors">
            Home
          </Link>
          <Link href="/services" className="hover:underline hover:text-secondary transition-colors">
            Services
          </Link>
          <Link href="/contact" className="hover:underline hover:text-secondary transition-colors">
            Contact
          </Link>
          <Link href="/privacy" className="hover:underline hover:text-secondary transition-colors">
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  );
}
