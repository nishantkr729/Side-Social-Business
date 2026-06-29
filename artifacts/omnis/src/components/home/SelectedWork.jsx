const CASE_STUDIES = [
  {
    id: 1,
    tag: "Social Sector",
    color: "green",
    title: "Strategic Planning for African Climate NGO",
    description: "Facilitated a full organizational re-strategy for a 60-person climate justice NGO, resulting in a 3-year roadmap, new funding streams, and a refreshed theory of change.",
    outcome: "3-year roadmap delivered",
  },
  {
    id: 2,
    tag: "Social Sector",
    color: "green",
    title: "Capacity Building for Women-Led Cooperative",
    description: "Delivered governance and financial management training across 12 community cooperatives, improving reporting compliance and unlocking access to international grants.",
    outcome: "12 cooperatives strengthened",
  },
  {
    id: 3,
    tag: "Business",
    color: "teal",
    title: "ESG Framework for Mid-Market Manufacturer",
    description: "Designed and implemented a full ESG reporting framework for a 200-employee manufacturer, meeting investor disclosure requirements and reducing energy costs by 18%.",
    outcome: "18% energy cost reduction",
  },
  {
    id: 4,
    tag: "Business",
    color: "teal",
    title: "CSR Partnership with Education Foundation",
    description: "Brokered and structured a multi-year CSR partnership between a financial services firm and a national literacy nonprofit, aligning brand values with measurable social outcomes.",
    outcome: "$2M partnership structured",
  },
];

function SelectedWork() {
  return (
    <section id="work" className="border-t border-white/10 py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-3">Selected Work</p>
          <h2 className="text-3xl md:text-4xl font-light text-white">What we've built together.</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {CASE_STUDIES.map((item) => (
            <div
              key={item.id}
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
  );
}

export default SelectedWork;
