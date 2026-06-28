const steps = [
  {
    step: "01",
    title: "Share your context",
    body: "A quick intake form lets us understand your industry, company size, and where you are in your CSR or ESG journey — so we can make the call immediately useful.",
  },
  {
    step: "02",
    title: "30-minute strategy call",
    body: "A member of our business team will meet with you to assess your current situation and identify the highest-leverage entry points for social impact strategy.",
  },
  {
    step: "03",
    title: "Receive a focused proposal",
    body: "Within one week, you'll receive a tailored proposal scoping the engagement that makes most sense for your business — with clear deliverables and transparent pricing.",
  },
];

export default function BusinessBookCall() {
  return (
    <div className="w-full">
      <section className="pt-24 pb-16 px-4 md:px-8 max-w-4xl mx-auto">
        <div className="mb-4">
          <span className="text-sm font-medium text-teal-600 tracking-widest uppercase">Book a Call</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-light tracking-tight text-gray-900 mb-8 leading-tight">
          Start a conversation about what's possible.
        </h1>
        <p className="text-xl text-gray-500 font-light leading-relaxed max-w-2xl">
          A free 30-minute call with our business team. We'll cut through the jargon and have a direct conversation about your goals.
        </p>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-light text-gray-900 mb-10">How it works</h2>
            <div className="space-y-10">
              {steps.map((s) => (
                <div key={s.step} className="flex gap-6">
                  <div className="text-3xl font-light text-teal-200 w-10 shrink-0">{s.step}</div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">{s.title}</h3>
                    <p className="text-gray-600 font-light leading-relaxed">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-teal-50 rounded-2xl p-6">
              <h3 className="text-base font-medium text-gray-900 mb-2">Who should request a call?</h3>
              <ul className="space-y-2 text-gray-600 font-light text-sm">
                {[
                  "Companies starting a CSR or ESG program from scratch",
                  "Organizations looking to restructure an existing but underperforming program",
                  "Leadership teams facing ESG disclosure requirements for the first time",
                  "Businesses seeking credible nonprofit partnerships for community investment",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-teal-500 mt-0.5">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
            <h2 className="text-xl font-medium text-gray-900 mb-6">Request a Call</h2>
            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! We'll be in touch within 2 business days to schedule your call.");
              }}
              data-testid="form-book-call"
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">First name</label>
                  <input
                    type="text"
                    required
                    placeholder="Alex"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-transparent transition"
                    data-testid="input-first-name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Last name</label>
                  <input
                    type="text"
                    required
                    placeholder="Morgan"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-transparent transition"
                    data-testid="input-last-name"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Company name</label>
                <input
                  type="text"
                  required
                  placeholder="Meridian Group"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-transparent transition"
                  data-testid="input-company-name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Work email</label>
                <input
                  type="email"
                  required
                  placeholder="alex@meridiangroup.com"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-transparent transition"
                  data-testid="input-email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Where are you in your CSR/ESG journey?</label>
                <select
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-transparent transition bg-white"
                  data-testid="select-csr-stage"
                >
                  <option value="">Select one...</option>
                  <option value="starting">Just getting started — no formal program yet</option>
                  <option value="early">Early stage — we have some initiatives but no strategy</option>
                  <option value="restructuring">We have a program but it needs restructuring</option>
                  <option value="reporting">We're focused on ESG reporting and disclosure</option>
                  <option value="partnerships">We're looking for nonprofit partners</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">What are you hoping to achieve?</label>
                <textarea
                  rows={3}
                  placeholder="We want to develop a credible ESG strategy before our next investor round..."
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-transparent transition resize-none"
                  data-testid="input-goals"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white py-4 rounded-lg font-medium transition-colors"
                data-testid="button-submit"
              >
                Request a Call
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
