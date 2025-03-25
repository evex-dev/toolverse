import Image from "next/image";
import Link from "next/link";
import { Hammer } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/10 border-b border-white/20">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Hammer />
          <a href="/" className="ml-2 font-bold text-white">Toolverse</a>
        </div>
        <nav className="hidden md:flex space-x-6 text-white/80">
          <Link href="/discover" className="hover:text-blue-300 transition-colors">ツール検索</Link>
          <Link href="/categories" className="hover:text-blue-300 transition-colors">カテゴリー</Link>
          <Link href="/popular" className="hover:text-blue-300 transition-colors">人気ツール</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="/submit" className="bg-blue-500/70 hover:bg-blue-600/80 backdrop-blur-sm text-white px-4 py-2 rounded-xl shadow-blue-500/20 shadow-lg transition-all border border-white/10">
            ツールを投稿
          </Link>
          <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
