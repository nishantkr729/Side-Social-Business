import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function SocialLanding() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="pt-24 pb-32 px-4 md:px-8 max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-light tracking-tight text-gray-900 mb-8 max-w-4xl mx-auto leading-tight">
          Building capacity for those who build <span className="text-green-600 font-medium">community</span>.
        </h1>
        <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          We partner with NGOs and nonprofits to strengthen their operations, measure their impact, and ensure sustainable growth.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/social/services" className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-md font-medium transition-colors w-full sm:w-auto">
            Explore Services
          </Link>
          <Link href="/social/book-call" className="px-8 py-4 bg-white border border-gray-200 hover:border-green-300 hover:bg-green-50 text-gray-900 rounded-md font-medium transition-colors w-full sm:w-auto">
            Talk to our team
          </Link>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="bg-green-50 py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-green-100/50">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <h3 className="text-xl font-medium mb-3">Funding Strategy</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Develop diversified revenue streams and compelling grant proposals that secure long-term sustainability.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-green-100/50">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
              </div>
              <h3 className="text-xl font-medium mb-3">Impact Measurement</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Design robust frameworks to track, evaluate, and communicate the true change your programs create.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-green-100/50">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <h3 className="text-xl font-medium mb-3">Capacity Building</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Strengthen organizational structure, board governance, and team leadership to scale your mission.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
