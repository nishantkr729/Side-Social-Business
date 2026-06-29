import { useGetCaseStudies } from "@workspace/api-client-react";
function SelectedWork() {
  const { data: work, isLoading } = useGetCaseStudies();
  return <section id="work" className="border-t border-white/10 py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-3">Selected Work</p>
          <h2 className="text-3xl md:text-4xl font-light text-white">What we've built together.</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {isLoading ? Array.from({ length: 4 }).map((_, i) => <div key={i} className="border border-white/10 rounded-2xl p-8">
                  <div className="h-5 w-24 bg-white/5 rounded-full animate-pulse mb-5" />
                  <div className="h-6 w-3/4 bg-white/5 rounded animate-pulse mb-3" />
                  <div className="h-16 bg-white/5 rounded animate-pulse mb-6" />
                  <div className="h-3 w-32 bg-white/5 rounded animate-pulse" />
                </div>) : work?.map((item) => <div
    key={item.id}
    className="border border-white/10 rounded-2xl p-8 hover:border-white/20 hover:bg-white/[0.03] transition-all"
  >
                  <span
    className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-5 ${item.color === "green" ? "bg-green-500/10 text-green-400" : "bg-teal-500/10 text-teal-400"}`}
  >
                    {item.tag}
                  </span>
                  <h3 className="text-lg font-medium text-white mb-3 leading-snug">{item.title}</h3>
                  <p className="text-sm text-gray-400 font-light leading-relaxed mb-6">{item.description}</p>
                  <div
    className={`text-xs font-semibold tracking-wide ${item.color === "green" ? "text-green-500" : "text-teal-500"}`}
  >
                    {item.outcome}
                  </div>
                </div>)}
        </div>
      </div>
    </section>;
}
export {
  SelectedWork as default
};
