export function AchievementsSection() {
  const stats = [
    { number: "100+", label: "Organizations Supported", sub: "Across NGOs, nonprofits & social enterprises" },
    { number: "18", label: "Countries", sub: "Active programs across Africa, Europe & Asia" },
    { number: "$12M+", label: "Social Investment Mobilized", sub: "Through CSR strategies & impact partnerships" },
    { number: "93%", label: "Client Retention", sub: "Long-term partners, not one-off engagements" },
  ];

  const work = [
    {
      tag: "Social Sector",
      color: "green",
      title: "Strategic Planning for African Climate NGO",
      description: "Facilitated a full organizational re-strategy for a 60-person climate justice NGO — resulting in a 3-year plan, a new governance framework, and a 40% increase in grant success rate.",
      outcome: "40% more grants secured",
    },
    {
      tag: "Business",
      color: "teal",
      title: "ESG Roadmap for a Mid-Size Manufacturer",
      description: "Designed a GRI-aligned ESG disclosure strategy and materiality assessment for a 500-person manufacturing company preparing for institutional investor scrutiny.",
      outcome: "First ESG report published in 6 months",
    },
    {
      tag: "Social Sector",
      color: "green",
      title: "Impact Measurement for Education Network",
      description: "Built a full MEAL framework and data collection system for a network of 14 schools reaching 8,000 students — enabling them to demonstrate outcomes to funders for the first time.",
      outcome: "8,000 students' outcomes tracked",
    },
    {
      tag: "Business",
      color: "teal",
      title: "Community Investment Program Design",
      description: "Co-designed a 3-year community investment strategy for a regional bank, matching them with 6 nonprofit partners and structuring joint governance for all programs.",
      outcome: "$2M invested with clear metrics",
    },
  ];

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen font-sans">
      {/* Stats Row */}
      <section className="border-b border-white/10 py-20 px-6 md:px-16">
        <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-14 text-center">
          Our Impact in Numbers
        </p>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-white/10">
          {stats.map((s) => (
            <div key={s.label} className="px-8 first:pl-0 last:pr-0 text-center md:text-left">
              <div className="text-4xl md:text-5xl font-light text-white mb-2">{s.number}</div>
              <div className="text-sm font-semibold text-gray-300 mb-1">{s.label}</div>
              <div className="text-xs text-gray-500 leading-relaxed">{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Work Section */}
      <section className="py-20 px-6 md:px-16 max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-3">Selected Work</p>
            <h2 className="text-3xl md:text-4xl font-light text-white">What we've built together.</h2>
          </div>
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
      </section>
    </div>
  );
}
