import Image from "next/image";
import Link from "next/link";
import { Hammer } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-transparent to-black/30 backdrop-blur-md py-8 mt-auto border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Hammer />
            <a href="/" className="ml-2 font-bold text-white">Toolverse</a>
          </div>
          <div className="flex space-x-6 text-blue-100/80">
            <Link href="/about" className="hover:text-blue-300 transition-colors">About</Link>
            <Link href="/contact" className="hover:text-blue-300 transition-colors">Contact</Link>
            <Link href="/privacy" className="hover:text-blue-300 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-blue-300 transition-colors">Terms</Link>
          </div>
        </div>
        <div className="mt-6 text-center text-sm text-blue-100/60">
          © {new Date().getFullYear()} Toolverse. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
