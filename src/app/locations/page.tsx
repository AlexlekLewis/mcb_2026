import Link from 'next/link';
import { LOCATIONS } from '@/lib/locations';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Service Areas | Modern Curtains and Blinds Melbourne",
    description: "We service homes across Melbourne's northern suburbs including Preston, Northcote, Thornbury, and beyond.",
};

export default function LocationsIndex() {
    return (
        <div className="bg-white min-h-screen pt-32 pb-24">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <span className="text-mcb-terracotta font-bold tracking-widest uppercase text-sm mb-4 block">Service Areas</span>
                    <h1 className="font-serif text-4xl md:text-5xl text-mcb-charcoal mb-6">Areas We Service</h1>
                    <p className="text-stone-500 text-lg">
                        Modern Curtains and Blinds provides professional design, measure and installation services across Melbourne.
                        We are proud to serve the local community.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-8">
                    {LOCATIONS.map((loc) => (
                        <Link
                            key={loc.slug}
                            href={`/locations/${loc.slug}`}
                            className="text-stone-600 hover:text-mcb-terracotta transition-colors py-2 border-b border-stone-100 flex justify-between items-center group"
                        >
                            <span>{loc.name}</span>
                            <span className="text-stone-300 group-hover:text-mcb-terracotta/50">{loc.postcode}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
