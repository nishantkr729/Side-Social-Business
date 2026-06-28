import { Link } from "wouter";

export default function BusinessLanding() {
  return (
    <div className="w-full">
      <section className="pt-24 pb-32 px-4 md:px-8 max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-light tracking-tight text-gray-900 mb-8 max-w-4xl mx-auto leading-tight">
          Doing business with <span className="text-teal-600 font-medium">purpose</span> is not a compromise.
        </h1>
        <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          We help companies build CSR and ESG strategies that are credible, measurable, and genuinely aligned with their business — not just compliance checkboxes.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/business/services"
            className="px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white rounded-md font-medium transition-colors w-full sm:w-auto"
            data-testid="link-services"
          >
            Explore Services
          </Link>
          <Link
            href="/business/book-call"
            className="px-8 py-4 bg-white border border-gray-200 hover:border-teal-300 hover:bg-teal-50 text-gray-900 rounded-md font-medium transition-colors w-full sm:w-auto"
            data-testid="link-book-call"
          >
            Talk to our team
          </Link>
        </div>
      </section>

      <section className="bg-teal-50 py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-teal-100/50">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-6 text-teal-600">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">CSR Strategy</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Build a corporate social responsibility framework that reflects your values, resonates with stakeholders, and creates measurable community impact.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-teal-100/50">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-6 text-teal-600">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">ESG Advisory</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Navigate the ESG reporting landscape with expert guidance on frameworks, disclosure standards, and integrating sustainability into core business decisions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-teal-100/50">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-6 text-teal-600">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">Impact Partnerships</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Connect your company with the right nonprofit partners for strategic, results-driven collaborations that serve communities and strengthen your brand.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 md:px-8 max-w-4xl mx-auto text-center">
        <p className="text-sm font-medium text-teal-600 tracking-widest uppercase mb-6">Why it matters</p>
        <blockquote className="text-3xl md:text-4xl font-light text-gray-800 leading-relaxed mb-8">
          "Businesses that integrate social purpose into their strategy don't just perform better on ESG rankings — they attract better talent, build stronger brands, and earn deeper stakeholder trust."
        </blockquote>
        <p className="text-gray-500 font-light">The Omnis Business Team</p>
      </section>
    </div>
  );
}
