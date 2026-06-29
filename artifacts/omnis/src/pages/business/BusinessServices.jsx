import { Link } from "wouter";
const services = [
  {
    category: "CSR Strategy",
    items: [
      {
        title: "CSR Framework Development",
        description: "Design a coherent CSR strategy aligned with your business model, sector context, and stakeholder expectations \u2014 with clear priorities, resource allocation, and governance."
      },
      {
        title: "Community Investment Programs",
        description: "Structure and launch employee volunteering, skills-based giving, and grant programs that create genuine impact while building team cohesion and brand equity."
      }
    ]
  },
  {
    category: "ESG & Reporting",
    items: [
      {
        title: "ESG Materiality Assessment",
        description: "Identify the environmental, social, and governance issues most material to your business and stakeholders \u2014 the foundation of any credible ESG strategy."
      },
      {
        title: "Reporting & Disclosure Support",
        description: "Navigate GRI, SASB, TCFD, and other reporting frameworks with expert support \u2014 from first disclosure to advanced integrated reporting."
      }
    ]
  },
  {
    category: "Impact Partnerships",
    items: [
      {
        title: "Nonprofit Partner Matching",
        description: "Identify and vet the right civil society partners for your programs \u2014 organizations with proven track records, strong governance, and alignment with your social objectives."
      },
      {
        title: "Partnership Design & Management",
        description: "Design partnership agreements, accountability frameworks, and joint monitoring systems so that corporate-NGO collaborations deliver on their promise."
      }
    ]
  },
  {
    category: "Stakeholder Engagement",
    items: [
      {
        title: "Stakeholder Mapping & Dialogue",
        description: "Map your stakeholder landscape, prioritize engagement, and design processes for meaningful dialogue \u2014 especially with communities directly affected by your operations."
      },
      {
        title: "Social Impact Measurement",
        description: "Build data collection, evaluation, and reporting systems that demonstrate the real social value your business creates \u2014 for investors, regulators, and the public."
      }
    ]
  }
];
function BusinessServices() {
  return <div className="w-full">
      <section className="pt-24 pb-16 px-4 md:px-8 max-w-4xl mx-auto">
        <div className="mb-4">
          <span className="text-sm font-medium text-teal-600 tracking-widest uppercase">Our Services</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-light tracking-tight text-gray-900 mb-8 leading-tight">
          Every service designed to make your social commitment real.
        </h1>
        <p className="text-xl text-gray-500 font-light leading-relaxed">
          From ESG disclosure to community investment programs, we cover the full spectrum of corporate social responsibility — with rigor, not rhetoric.
        </p>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="space-y-20">
          {services.map((group) => <div key={group.category}>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-2 h-2 rounded-full bg-teal-500" />
                <h2 className="text-sm font-semibold text-teal-700 tracking-widest uppercase">
                  {group.category}
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {group.items.map((item) => <div
    key={item.title}
    className="bg-white border border-gray-100 rounded-2xl p-8 hover:border-teal-200 hover:shadow-sm transition-all"
  >
                    <h3 className="text-xl font-medium text-gray-900 mb-4">{item.title}</h3>
                    <p className="text-gray-600 font-light leading-relaxed">{item.description}</p>
                  </div>)}
              </div>
            </div>)}
        </div>
      </section>

      <section className="bg-teal-50 py-20 mt-16">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl font-light text-gray-900 mb-6">Ready to build something meaningful?</h2>
          <p className="text-gray-600 font-light leading-relaxed mb-10">
            We start every engagement with a discovery call to make sure we're aligned on scope, objectives, and what success looks like for your business.
          </p>
          <Link
    href="/business/book-call"
    className="inline-block px-10 py-4 bg-teal-600 hover:bg-teal-700 text-white rounded-md font-medium transition-colors"
    data-testid="link-book-call-cta"
  >
            Book a Free Discovery Call
          </Link>
        </div>
      </section>
    </div>;
}
export {
  BusinessServices as default
};
