import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const stats = [
  { number: "100+", label: "Organizations Supported", sub: "NGOs, nonprofits & social enterprises" },
  { number: "18", label: "Countries", sub: "Active programs across 3 continents" },
  { number: "$12M+", label: "Social Investment Mobilized", sub: "Through CSR & impact partnerships" },
  { number: "93%", label: "Client Retention", sub: "Long-term partners, not one-off engagements" },
];

const work = [
  {
    tag: "Social Sector",
    color: "green",
    title: "Strategic Planning for African Climate NGO",
    description:
      "Facilitated a full organizational re-strategy for a 60-person climate justice NGO — resulting in a 3-year plan, a new governance framework, and a 40% increase in grant success rate.",
    outcome: "40% more grants secured",
  },
  {
    tag: "Business",
    color: "teal",
    title: "ESG Roadmap for a Mid-Size Manufacturer",
    description:
      "Designed a GRI-aligned ESG disclosure strategy and materiality assessment for a 500-person manufacturing company preparing for institutional investor scrutiny.",
    outcome: "First ESG report published in 6 months",
  },
  {
    tag: "Social Sector",
    color: "green",
    title: "Impact Measurement for Education Network",
    description:
      "Built a full MEAL framework and data collection system for a network of 14 schools reaching 8,000 students — enabling them to demonstrate outcomes to funders for the first time.",
    outcome: "8,000 students' outcomes tracked",
  },
  {
    tag: "Business",
    color: "teal",
    title: "Community Investment Program Design",
    description:
      "Co-designed a 3-year community investment strategy for a regional bank, matching them with 6 nonprofit partners and structuring joint governance for all programs.",
    outcome: "$2M invested with clear metrics",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] w-full bg-[#0a0a0a] text-white">

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0a0a0a]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-18 flex items-center justify-between py-4">
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
              data-testid="link-header-social-cta"
            >
              Social Sector
            </Link>
            <Link
              href="/business/book-call"
              className="text-sm font-medium bg-white text-gray-900 hover:bg-gray-100 px-4 py-2 rounded-md transition-colors"
              data-testid="link-header-business-cta"
            >
              Business
            </Link>
          </div>
        </div>
      </header>

      {/* Split Screen */}
      <div className="flex flex-col md:flex-row" style={{ minHeight: "calc(100dvh - 64px)" }}>
        {/* Social Sector Half */}
        <Link
          href="/social"
          className="group flex-1 flex flex-col justify-center items-center text-center p-8 md:p-16 border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/5 transition-colors duration-500 cursor-pointer"
          data-testid="link-social-enter"
        >
          <div className="max-w-md">
            <div className="w-16 h-1 bg-green-500 mx-auto mb-8 transition-transform duration-300 group-hover:scale-x-150" />
            <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6">Social Sector</h2>
            <p className="text-lg md:text-xl text-gray-400 font-light mb-12">
              Empowering NGOs and nonprofits to scale their impact through strategic capacity building.
            </p>
            <div className="inline-flex items-center gap-3 text-green-500 font-medium tracking-wide">
              ENTER <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
            </div>
          </div>
        </Link>

        {/* Business Sector Half */}
        <Link
          href="/business"
          className="group flex-1 flex flex-col justify-center items-center text-center p-8 md:p-16 hover:bg-white/5 transition-colors duration-500 cursor-pointer"
          data-testid="link-business-enter"
        >
          <div className="max-w-md">
            <div className="w-16 h-1 bg-teal-500 mx-auto mb-8 transition-transform duration-300 group-hover:scale-x-150" />
            <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6">Business Owners</h2>
            <p className="text-lg md:text-xl text-gray-400 font-light mb-12">
              Guiding companies to build meaningful CSR strategies and sustainable ESG partnerships.
            </p>
            <div className="inline-flex items-center gap-3 text-teal-500 font-medium tracking-wide">
              ENTER <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
            </div>
          </div>
        </Link>
      </div>

      {/* Impact Numbers */}
      <section id="impact" className="border-t border-white/10 py-20 px-6 md:px-16">
        <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-14 text-center">
          Our Impact in Numbers
        </p>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {stats.map((s) => (
            <div key={s.label} className="px-6 md:px-10 first:pl-0 last:pr-0 text-center md:text-left">
              <div className="text-4xl md:text-5xl font-light text-white mb-2">{s.number}</div>
              <div className="text-sm font-semibold text-gray-300 mb-1">{s.label}</div>
              <div className="text-xs text-gray-500 leading-relaxed">{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Selected Work */}
      <section id="work" className="border-t border-white/10 py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-3">Selected Work</p>
            <h2 className="text-3xl md:text-4xl font-light text-white">What we've built together.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {work.map((item) => (
              <div
                key={item.title}
                className="border border-white/10 rounded-2xl p-8 hover:border-white/20 hover:bg-white/[0.03] transition-all"
              >
                <span
                  className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-5 ${
                    item.color === "green"
                      ? "bg-green-500/10 text-green-400"
                      : "bg-teal-500/10 text-teal-400"
                  }`}
                >
                  {item.tag}
                </span>
                <h3 className="text-lg font-medium text-white mb-3 leading-snug">{item.title}</h3>
                <p className="text-sm text-gray-400 font-light leading-relaxed mb-6">{item.description}</p>
                <div
                  className={`text-xs font-semibold tracking-wide ${
                    item.color === "green" ? "text-green-500" : "text-teal-500"
                  }`}
                >
                  {item.outcome}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-auto">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <span className="text-xl font-medium tracking-tight block mb-4">
                Omnis<span className="text-green-500">.</span>
              </span>
              <p className="text-sm text-gray-500 font-light leading-relaxed max-w-[200px]">
                Bridging impact and purpose — for the social sector and for business.
              </p>
            </div>

            {/* Social Sector */}
            <div>
              <h4 className="text-xs font-semibold text-gray-500 tracking-widest uppercase mb-5">Social Sector</h4>
              <ul className="space-y-3">
                {[
                  { label: "Overview", href: "/social" },
                  { label: "About", href: "/social/about" },
                  { label: "Services", href: "/social/services" },
                  { label: "Donate", href: "/social/donate" },
                  { label: "Book a Call", href: "/social/book-call" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Business */}
            <div>
              <h4 className="text-xs font-semibold text-gray-500 tracking-widest uppercase mb-5">Business</h4>
              <ul className="space-y-3">
                {[
                  { label: "Overview", href: "/business" },
                  { label: "About", href: "/business/about" },
                  { label: "Services", href: "/business/services" },
                  { label: "Book a Call", href: "/business/book-call" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
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

          {/* Bottom bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-600">
              &copy; {new Date().getFullYear()} Omnis. All rights reserved.
            </p>
            <p className="text-xs text-gray-600">
              Strategy with purpose.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
