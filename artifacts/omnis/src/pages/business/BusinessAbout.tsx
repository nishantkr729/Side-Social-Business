export default function BusinessAbout() {
  return (
    <div className="w-full">
      <section className="pt-24 pb-16 px-4 md:px-8 max-w-4xl mx-auto">
        <div className="mb-4">
          <span className="text-sm font-medium text-teal-600 tracking-widest uppercase">About Omnis Business</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-light tracking-tight text-gray-900 mb-8 leading-tight">
          We help companies mean what they say about social impact.
        </h1>
        <p className="text-xl text-gray-500 font-light leading-relaxed max-w-2xl">
          Omnis Business exists because too many CSR programs look good on paper and accomplish little in practice. We're here to change that — with rigorous strategy, real partnerships, and accountability built in from the start.
        </p>
      </section>

      <section className="bg-teal-50 py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-6">Our Perspective</h2>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                The Omnis Business team brings together corporate strategy consultants, ESG specialists, and former nonprofit leaders who understand both sides of the public-private divide.
              </p>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                We've seen what happens when companies treat CSR as a PR exercise — and what becomes possible when it's treated as genuine organizational priority. The difference isn't budget. It's design.
              </p>
              <p className="text-gray-600 font-light leading-relaxed">
                Our approach is grounded in co-design with both companies and the communities they aim to serve. We don't impose frameworks — we build strategies that fit your sector, your stakeholders, and your stage of growth.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "60+", label: "Companies advised" },
                { number: "18", label: "Industry sectors" },
                { number: "$12M+", label: "Social investment mobilized" },
                { number: "100%", label: "Report measurable outcomes" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white p-8 rounded-2xl border border-teal-100 text-center">
                  <div className="text-4xl font-light text-teal-600 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-light text-gray-900 mb-12">Our Principles</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Substance over optics",
              body: "A CSR strategy should create real outcomes — not just good press. We design for impact first, and help you communicate it second.",
            },
            {
              title: "Community as co-designer",
              body: "The communities your programs target should shape them. We facilitate genuine co-design processes that build trust and relevance from the ground up.",
            },
            {
              title: "Integrated, not siloed",
              body: "Social responsibility belongs in business strategy, procurement, HR, and culture — not just in a dedicated department filing annual reports.",
            },
          ].map((val) => (
            <div key={val.title} className="border-t-2 border-teal-200 pt-8">
              <h3 className="text-xl font-medium text-gray-900 mb-4">{val.title}</h3>
              <p className="text-gray-600 font-light leading-relaxed">{val.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
