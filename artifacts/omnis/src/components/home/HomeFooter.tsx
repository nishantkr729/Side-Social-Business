import { Link } from "wouter";

const socialLinks = [
  { label: "Overview", href: "/social" },
  { label: "About", href: "/social/about" },
  { label: "Services", href: "/social/services" },
  { label: "Donate", href: "/social/donate" },
  { label: "Book a Call", href: "/social/book-call" },
];

const businessLinks = [
  { label: "Overview", href: "/business" },
  { label: "About", href: "/business/about" },
  { label: "Services", href: "/business/services" },
  { label: "Book a Call", href: "/business/book-call" },
];

export default function HomeFooter() {
  return (
    <footer className="border-t border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          <div className="col-span-2 md:col-span-1">
            <span className="text-xl font-medium tracking-tight block mb-4">
              Omnis<span className="text-green-500">.</span>
            </span>
            <p className="text-sm text-gray-500 font-light leading-relaxed max-w-[200px]">
              Bridging impact and purpose — for the social sector and for business.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-gray-500 tracking-widest uppercase mb-5">Social Sector</h4>
            <ul className="space-y-3">
              {socialLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-gray-500 tracking-widest uppercase mb-5">Business</h4>
            <ul className="space-y-3">
              {businessLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-gray-500 tracking-widest uppercase mb-5">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:hello@omnis.org" className="text-sm text-gray-400 hover:text-white transition-colors">
                  hello@omnis.org
                </a>
              </li>
              <li>
                <a href="mailto:donate@omnis.org" className="text-sm text-gray-400 hover:text-white transition-colors">
                  donate@omnis.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">&copy; {new Date().getFullYear()} Omnis. All rights reserved.</p>
          <p className="text-xs text-gray-600">Strategy with purpose.</p>
        </div>
      </div>
    </footer>
  );
}
