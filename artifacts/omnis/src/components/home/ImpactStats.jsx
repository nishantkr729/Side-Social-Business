const STATS = [
  { id: 1, number: "100+", label: "Organizations Supported", sub: "NGOs, nonprofits & social enterprises" },
  { id: 2, number: "18", label: "Countries", sub: "Active programs across 3 continents" },
  { id: 3, number: "$12M+", label: "Social Investment Mobilized", sub: "Through CSR & impact partnerships" },
  { id: 4, number: "93%", label: "Client Retention", sub: "Long-term partners, not one-off engagements" },
];

function ImpactStats() {
  return (
    <section id="impact" className="border-t border-white/10 py-20 px-6 md:px-16">
      <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-14 text-center">
        Our Impact in Numbers
      </p>
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
        {STATS.map((s) => (
          <div key={s.id} className="px-6 md:px-10 first:pl-0 last:pr-0 text-center md:text-left">
            <div className="text-4xl md:text-5xl font-light text-white mb-2">{s.number}</div>
            <div className="text-sm font-semibold text-gray-300 mb-1">{s.label}</div>
            <div className="text-xs text-gray-500 leading-relaxed">{s.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ImpactStats;
