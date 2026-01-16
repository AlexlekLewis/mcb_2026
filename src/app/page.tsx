import { Hero } from "@/components/Hero";
import { ServiceSelector } from "@/components/ServiceSelector";
import { TrustBar } from "@/components/TrustBar";
import { CategoryGrid } from "@/components/CategoryGrid";
import { GoogleReviewsWidget } from "@/components/GoogleReviewsWidget";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <GoogleReviewsWidget />
      <ServiceSelector />
      <TrustBar />
      <CategoryGrid />

      {/* Additional value proposition section based on report's "About" context */}
      <section className="py-24 bg-mcb-paper">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-mcb-charcoal mb-6">Experience the Difference</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto mt-12">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-2xl font-serif text-mcb-terracotta">1</div>
              <h3 className="font-serif text-xl mb-3">Custom Made in Melbourne</h3>
              <p className="text-stone-500">Every blind, curtain, and door is manufactured to your exact specifications in our local facility.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-2xl font-serif text-mcb-terracotta">2</div>
              <h3 className="font-serif text-xl mb-3">Professional Installation</h3>
              <p className="text-stone-500">Our team of experienced installers ensures a perfect fit and finish, every single time.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-2xl font-serif text-mcb-terracotta">3</div>
              <h3 className="font-serif text-xl mb-3">Industry Leading Warranty</h3>
              <p className="text-stone-500">Peace of mind with our comprehensive warranties on all fabrics, mechanisms, and security screens.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
