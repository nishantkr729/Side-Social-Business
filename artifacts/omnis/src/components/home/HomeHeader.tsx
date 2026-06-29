import { Link } from "wouter";

export default function HomeHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0a0a0a]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between py-4">
        <span className="text-xl font-medium tracking-tight">
          Omnis<span className="text-green-500">.</span>
        </span>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#impact" className="text-sm text-gray-400 hover:text-white transition-colors font-medium">
            Impact
          </a>
          <a href="#work" className="text-sm text-gray-400 hover:text-white transition-colors font-medium">
            Work
          </a>
          <Link href="/social" className="text-sm text-gray-400 hover:text-white transition-colors font-medium">
            Social Sector
          </Link>
          <Link href="/business" className="text-sm text-gray-400 hover:text-white transition-colors font-medium">
            Business
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/social/book-call"
            className="text-sm font-medium text-white border border-white/20 hover:border-white/40 px-4 py-2 rounded-md transition-colors hidden md:block"
          >
            Social Sector
          </Link>
          <Link
            href="/business/book-call"
            className="text-sm font-medium bg-white text-gray-900 hover:bg-gray-100 px-4 py-2 rounded-md transition-colors"
          >
            Business
          </Link>
        </div>
      </div>
    </header>
  );
}
