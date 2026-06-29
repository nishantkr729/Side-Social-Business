import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function SplitScreen() {
  return (
    <div className="flex flex-col md:flex-row" style={{ minHeight: "calc(100dvh - 64px)" }}>
      <Link
        href="/social"
        className="group flex-1 flex flex-col justify-center items-center text-center p-8 md:p-16 border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/5 transition-colors duration-500 cursor-pointer"
      >
        <div className="max-w-md">
          <div className="w-16 h-1 bg-green-500 mx-auto mb-8 transition-transform duration-300 group-hover:scale-x-150" />
          <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6">Social Sector</h2>
          <p className="text-lg md:text-xl text-gray-400 font-light mb-12">
            Empowering NGOs and nonprofits to scale their impact through strategic capacity building.
          </p>
          <div className="inline-flex items-center gap-3 text-green-500 font-medium tracking-wide">
            ENTER <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
          </div>
        </div>
      </Link>

      <Link
        href="/business"
        className="group flex-1 flex flex-col justify-center items-center text-center p-8 md:p-16 hover:bg-white/5 transition-colors duration-500 cursor-pointer"
      >
        <div className="max-w-md">
          <div className="w-16 h-1 bg-teal-500 mx-auto mb-8 transition-transform duration-300 group-hover:scale-x-150" />
          <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6">Business Owners</h2>
          <p className="text-lg md:text-xl text-gray-400 font-light mb-12">
            Guiding companies to build meaningful CSR strategies and sustainable ESG partnerships.
          </p>
          <div className="inline-flex items-center gap-3 text-teal-500 font-medium tracking-wide">
            ENTER <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
          </div>
        </div>
      </Link>
    </div>
  );
}
