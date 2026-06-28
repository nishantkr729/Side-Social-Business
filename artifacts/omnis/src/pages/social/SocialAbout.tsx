export default function SocialAbout() {
  return (
    <div className="w-full">
      <section className="pt-24 pb-16 px-4 md:px-8 max-w-4xl mx-auto">
        <div className="mb-4">
          <span className="text-sm font-medium text-green-600 tracking-widest uppercase">About Omnis Social</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-light tracking-tight text-gray-900 mb-8 leading-tight">
          We exist to strengthen the organizations that strengthen communities.
        </h1>
        <p className="text-xl text-gray-500 font-light leading-relaxed max-w-2xl">
          Omnis Social was founded on a simple belief: that nonprofits and NGOs deserve the same caliber of strategic support that the private sector takes for granted.
        </p>
      </section>

      <section className="bg-green-50 py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                Omnis was born from years of working alongside civil society organizations across Africa and beyond — watching brilliant teams with powerful missions struggle not because of lack of passion, but because of gaps in organizational infrastructure.
              </p>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                We saw foundations scramble for funding with no diversification strategy. We saw impact measurement done by gut feeling. We saw boards without governance frameworks. And we knew we could help.
              </p>
              <p className="text-gray-600 font-light leading-relaxed">
                Today, Omnis works with over 40 social sector organizations — from grassroots community groups to established international NGOs — providing the strategic scaffolding that lets mission-driven work grow sustainably.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "40+", label: "Organizations supported" },
                { number: "12", label: "Countries of operation" },
                { number: "8yrs", label: "Of sector experience" },
                { number: "93%", label: "Client retention rate" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white p-8 rounded-2xl border border-green-100 text-center">
                  <div className="text-4xl font-light text-green-600 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-light text-gray-900 mb-12">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Equity-centered",
              body: "We prioritize organizations serving historically marginalized communities, because sustainable support is most needed where resources are most scarce.",
            },
            {
              title: "Practical over theoretical",
              body: "We deliver tools and frameworks that teams can actually use — not dense reports that sit on shelves. Everything we build is grounded in organizational reality.",
            },
            {
              title: "Long-term partnerships",
              body: "Capacity building is not a one-time intervention. We work alongside organizations across months and years, adjusting as they grow and as contexts change.",
            },
          ].map((val) => (
            <div key={val.title} className="border-t-2 border-green-200 pt-8">
              <h3 className="text-xl font-medium text-gray-900 mb-4">{val.title}</h3>
              <p className="text-gray-600 font-light leading-relaxed">{val.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
