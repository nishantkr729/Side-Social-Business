import { useGetStats } from "@workspace/api-client-react";
function ImpactStats() {
  const { data: stats, isLoading } = useGetStats();
  return <section id="impact" className="border-t border-white/10 py-20 px-6 md:px-16">
      <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-14 text-center">
        Our Impact in Numbers
      </p>
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
        {isLoading ? Array.from({ length: 4 }).map((_, i) => <div key={i} className="px-6 md:px-10 first:pl-0 last:pr-0">
                <div className="h-12 w-24 bg-white/5 rounded animate-pulse mb-2" />
                <div className="h-4 w-32 bg-white/5 rounded animate-pulse mb-1" />
                <div className="h-3 w-40 bg-white/5 rounded animate-pulse" />
              </div>) : stats?.map((s) => <div key={s.id} className="px-6 md:px-10 first:pl-0 last:pr-0 text-center md:text-left">
                <div className="text-4xl md:text-5xl font-light text-white mb-2">{s.number}</div>
                <div className="text-sm font-semibold text-gray-300 mb-1">{s.label}</div>
                <div className="text-xs text-gray-500 leading-relaxed">{s.sub}</div>
              </div>)}
      </div>
    </section>;
}
export {
  ImpactStats as default
};
