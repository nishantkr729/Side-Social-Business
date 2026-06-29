const causes = [
  {
    title: "Community Resilience Fund",
    description: "Supports grassroots organizations in underserved areas with capacity building grants, helping them develop the internal systems to attract larger funding and serve their communities more effectively.",
    impact: "Every $500 funds one day of hands-on consulting for an under-resourced NGO.",
    tag: "Capacity Building"
  },
  {
    title: "Impact Measurement Initiative",
    description: "Enables small nonprofits to access rigorous impact measurement support they could never afford independently \u2014 so their programs can be evidence-backed and their stories compellingly told.",
    impact: "Every $250 helps one organization design a results framework for their programs.",
    tag: "Measurement & Evidence"
  },
  {
    title: "Leadership Pipeline",
    description: "Provides leadership training and mentorship for emerging social sector leaders in regions where professional development resources are scarce but mission-driven talent is abundant.",
    impact: "Every $100 contributes to one month of mentorship for an emerging nonprofit leader.",
    tag: "Leadership Development"
  }
];
function SocialDonate() {
  return <div className="w-full">
      <section className="pt-24 pb-16 px-4 md:px-8 max-w-4xl mx-auto">
        <div className="mb-4">
          <span className="text-sm font-medium text-green-600 tracking-widest uppercase">Support Our Work</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-light tracking-tight text-gray-900 mb-8 leading-tight">
          Invest in the organizations that invest in people.
        </h1>
        <p className="text-xl text-gray-500 font-light leading-relaxed max-w-2xl">
          Donations to Omnis Social directly subsidize capacity building support for NGOs and nonprofits that cannot afford it on their own — multiplying your impact through the organizations we strengthen.
        </p>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-2xl font-light text-gray-900 mb-10">Where your support goes</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {causes.map((cause) => <div
    key={cause.title}
    className="bg-white border border-gray-100 rounded-2xl p-8 flex flex-col gap-4 hover:border-green-200 hover:shadow-sm transition-all"
  >
              <span className="inline-block text-xs font-semibold text-green-700 bg-green-50 px-3 py-1 rounded-full w-fit">
                {cause.tag}
              </span>
              <h3 className="text-xl font-medium text-gray-900">{cause.title}</h3>
              <p className="text-gray-600 font-light leading-relaxed flex-1">{cause.description}</p>
              <div className="border-t border-gray-100 pt-4">
                <p className="text-sm text-green-700 font-medium">{cause.impact}</p>
              </div>
            </div>)}
        </div>

        <div className="bg-green-50 rounded-3xl p-12 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-light text-gray-900 mb-4">Ready to contribute?</h2>
          <p className="text-gray-600 font-light leading-relaxed mb-8">
            Reach out to us directly to discuss donation options, in-kind contributions, or multi-year partnership support. We'll connect you with the initiative that fits your goals.
          </p>
          <a
    href="mailto:donate@omnis.org"
    className="inline-block px-10 py-4 bg-green-600 hover:bg-green-700 text-white rounded-md font-medium transition-colors"
    data-testid="link-donate-contact"
  >
            Contact us to Donate
          </a>
          <p className="mt-4 text-sm text-gray-400">
            Or email us at <span className="text-green-600">donate@omnis.org</span>
          </p>
        </div>
      </section>
    </div>;
}
export {
  SocialDonate as default
};
