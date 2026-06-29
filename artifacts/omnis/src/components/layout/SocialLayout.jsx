import { Link, useLocation } from "wouter";
function SocialLayout({ children }) {
  const [location] = useLocation();
  const navItems = [
    { label: "Home", href: "/social" },
    { label: "About", href: "/social/about" },
    { label: "Services", href: "/social/services" },
    { label: "Donate", href: "/social/donate" }
  ];
  return <div className="min-h-[100dvh] flex flex-col bg-[#fcfdfc] text-gray-900 font-sans">
      <header className="sticky top-0 z-50 w-full border-b border-green-100 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/social" className="text-xl font-medium tracking-tight text-green-800">
              Omnis<span className="text-green-500">.</span>Social
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => <Link
    key={item.href}
    href={item.href}
    className={`text-sm font-medium transition-colors ${location === item.href ? "text-green-600" : "text-gray-500 hover:text-green-600"}`}
  >
                  {item.label}
                </Link>)}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors hidden md:block">
              Back to Split Home
            </Link>
            <Link href="/social/book-call" className="bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-md text-sm font-medium transition-colors">
              Book a Call
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1 flex flex-col">
        {children}
      </main>
      <footer className="bg-green-950 text-green-100 py-12 mt-auto">
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-medium tracking-tight">
            Omnis<span className="text-green-400">.</span>Social
          </div>
          <div className="text-sm text-green-300/60">
            &copy; {(/* @__PURE__ */ new Date()).getFullYear()} Omnis. Bridging impact and capacity.
          </div>
        </div>
      </footer>
    </div>;
}
export {
  SocialLayout as default
};
