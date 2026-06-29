import { Link } from "wouter";
const services = [
  {
    category: "Strategy & Planning",
    items: [
      {
        title: "Strategic Planning",
        description: "Facilitated multi-year planning processes that align your board, staff, and stakeholders around a coherent theory of change and measurable organizational goals."
      },
      {
        title: "Funding Diversification",
        description: "Audit your current funding mix, identify dependency risks, and build a roadmap to sustainable multi-source revenue \u2014 grants, earned income, individual giving, and partnerships."
      }
    ]
  },
  {
    category: "Impact & Measurement",
    items: [
      {
        title: "Impact Measurement Framework",
        description: "Design a results framework (log frame, theory of change, MEAL plan) tailored to your programs, with data collection tools your team can actually manage."
      },
      {
        title: "Reporting & Communication",
        description: "Transform raw program data into compelling donor reports, annual reviews, and impact stories that build trust and open doors to new funding."
      }
    ]
  },
  {
    category: "Organizational Development",
    items: [
      {
        title: "Board Governance",
        description: "Strengthen board structure, recruitment, role clarity, and meeting practices so your governing body is an asset to the organization \u2014 not a liability."
      },
      {
        title: "Operational Systems",
        description: "Build or refine the HR policies, financial controls, and operational processes that let your team function at scale without burning out."
      }
    ]
  },
  {
    category: "Capacity Building",
    items: [
      {
        title: "Staff & Leadership Development",
        description: "Custom training programs and coaching for leadership teams, program managers, and frontline staff \u2014 grounded in real challenges, not generic workshops."
      },
      {
        title: "Grant Writing Support",
        description: "Expert support crafting proposals to institutional funders, foundations, and government donors \u2014 from concept notes to full applications."
      }
    ]
  }
];
function SocialServices() {
  return <div className="w-full">
      <section className="pt-24 pb-16 px-4 md:px-8 max-w-4xl mx-auto">
        <div className="mb-4">
          <span className="text-sm font-medium text-green-600 tracking-widest uppercase">Our Services</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-light tracking-tight text-gray-900 mb-8 leading-tight">
          Strategic support for every stage of your organization.
        </h1>
        <p className="text-xl text-gray-500 font-light leading-relaxed">
          We work with nonprofits and NGOs across four core areas — from clarifying your strategy to building the internal systems that sustain it.
        </p>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="space-y-20">
          {services.map((group) => <div key={group.category}>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <h2 className="text-sm font-semibold text-green-700 tracking-widest uppercase">
                  {group.category}
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {group.items.map((item) => <div
    key={item.title}
    className="bg-white border border-gray-100 rounded-2xl p-8 hover:border-green-200 hover:shadow-sm transition-all"
  >
                    <h3 className="text-xl font-medium text-gray-900 mb-4">{item.title}</h3>
                    <p className="text-gray-600 font-light leading-relaxed">{item.description}</p>
                  </div>)}
              </div>
            </div>)}
        </div>
      </section>

      <section className="bg-green-50 py-20 mt-16">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl font-light text-gray-900 mb-6">Not sure where to start?</h2>
          <p className="text-gray-600 font-light leading-relaxed mb-10">
            Most organizations we work with come to us with a specific pain point. A 30-minute discovery call is usually enough to identify what kind of support would move the needle most.
          </p>
          <Link
    href="/social/book-call"
    className="inline-block px-10 py-4 bg-green-600 hover:bg-green-700 text-white rounded-md font-medium transition-colors"
    data-testid="link-book-call-cta"
  >
            Book a Free Discovery Call
          </Link>
        </div>
      </section>
    </div>;
}
export {
  SocialServices as default
};
