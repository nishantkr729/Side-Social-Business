const steps = [
  {
    step: "01",
    title: "Tell us about your organization",
    body: "We'll start with a brief intake form to understand your size, focus area, and current challenges — so the call is useful from minute one.",
  },
  {
    step: "02",
    title: "30-minute discovery call",
    body: "A member of our social sector team will meet with you to understand where you are, where you want to go, and where the biggest gaps are.",
  },
  {
    step: "03",
    title: "Receive a tailored proposal",
    body: "Within one week of the call, we'll send you a focused proposal outlining how Omnis can best support your organization — with clear scope and pricing.",
  },
];

export default function SocialBookCall() {
  return (
    <div className="w-full">
      <section className="pt-24 pb-16 px-4 md:px-8 max-w-4xl mx-auto">
        <div className="mb-4">
          <span className="text-sm font-medium text-green-600 tracking-widest uppercase">Book a Call</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-light tracking-tight text-gray-900 mb-8 leading-tight">
          Let's find out if we're the right fit.
        </h1>
        <p className="text-xl text-gray-500 font-light leading-relaxed max-w-2xl">
          A free 30-minute call with our social sector team. No pitch. Just a genuine conversation about your organization's needs.
        </p>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-light text-gray-900 mb-10">How it works</h2>
            <div className="space-y-10">
              {steps.map((s) => (
                <div key={s.step} className="flex gap-6">
                  <div className="text-3xl font-light text-green-200 w-10 shrink-0">{s.step}</div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">{s.title}</h3>
                    <p className="text-gray-600 font-light leading-relaxed">{s.body}</p>
                  </div>
                </div>
              ))}
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
                    placeholder="Jane"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent transition"
                    data-testid="input-first-name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Last name</label>
                  <input
                    type="text"
                    required
                    placeholder="Doe"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent transition"
                    data-testid="input-last-name"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Organization name</label>
                <input
                  type="text"
                  required
                  placeholder="Bright Futures Foundation"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent transition"
                  data-testid="input-org-name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Work email</label>
                <input
                  type="email"
                  required
                  placeholder="jane@brightfutures.org"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent transition"
                  data-testid="input-email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">What's your biggest challenge right now?</label>
                <textarea
                  rows={4}
                  placeholder="We're struggling to diversify our funding beyond one main donor..."
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent transition resize-none"
                  data-testid="input-challenge"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg font-medium transition-colors"
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
