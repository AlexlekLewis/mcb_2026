import { Ruler, Hammer } from "lucide-react";
import Link from "next/link";

export function ServiceSelector() {
    return (
        <section className="w-full bg-white z-20 relative -mt-0 shadow-lg border-b border-stone-100">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-stone-100">

                    {/* DIY Option */}
                    <Link href="/shop" className="group flex-1 py-10 px-6 flex items-center justify-center gap-6 hover:bg-mcb-paper transition-colors cursor-pointer">
                        <div className="w-16 h-16 rounded-full bg-mcb-sand flex items-center justify-center text-mcb-charcoal group-hover:bg-mcb-terracotta group-hover:text-white transition-all duration-300">
                            <Ruler size={32} />
                        </div>
                        <div>
                            <h3 className="font-serif text-2xl text-mcb-charcoal mb-1 group-hover:text-mcb-terracotta transition-colors">I Want to DIY</h3>
                            <p className="text-stone-500 text-sm">Order custom made blinds & curtains directly.</p>
                        </div>
                    </Link>

                    {/* Installation Option */}
                    <Link href="/consultation" className="group flex-1 py-10 px-6 flex items-center justify-center gap-6 hover:bg-mcb-paper transition-colors cursor-pointer">
                        <div className="w-16 h-16 rounded-full bg-mcb-sage/20 flex items-center justify-center text-mcb-sage-dark group-hover:bg-mcb-sage-dark group-hover:text-white transition-all duration-300">
                            <Hammer size={32} />
                        </div>
                        <div>
                            <h3 className="font-serif text-2xl text-mcb-charcoal mb-1 group-hover:text-mcb-sage-dark transition-colors">I Need Installation</h3>
                            <p className="text-stone-500 text-sm">Book a free measure & quote with a pro.</p>
                        </div>
                    </Link>

                </div>
            </div>
        </section>
    );
}
