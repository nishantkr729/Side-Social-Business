import { Link, useLocation } from "wouter";
import { ReactNode } from "react";

export default function BusinessLayout({ children }: { children: ReactNode }) {
  const [location] = useLocation();

  const navItems = [
    { label: "Home", href: "/business" },
    { label: "About", href: "/business/about" },
    { label: "Services", href: "/business/services" },
  ];

  return (
    <div className="min-h-[100dvh] flex flex-col bg-[#f8fafb] text-gray-900 font-sans">
      <header className="sticky top-0 z-50 w-full border-b border-teal-100 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/business" className="text-xl font-medium tracking-tight text-teal-900">
              Omnis<span className="text-teal-500">.</span>Business
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    location === item.href ? "text-teal-600" : "text-gray-500 hover:text-teal-600"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors hidden md:block">
              Back to Split Home
            </Link>
            <Link href="/business/book-call" className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-md text-sm font-medium transition-colors">
              Book a Call
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1 flex flex-col">
        {children}
      </main>
      <footer className="bg-teal-950 text-teal-100 py-12 mt-auto">
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-medium tracking-tight">
            Omnis<span className="text-teal-400">.</span>Business
          </div>
          <div className="text-sm text-teal-300/60">
            &copy; {new Date().getFullYear()} Omnis. Strategy with purpose.
          </div>
        </div>
      </footer>
    </div>
  );
}
