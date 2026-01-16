import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Using the provided assets
const CATEGORIES = [
    { title: "Roller Blinds", image: "/assets/roller_blind_hero.png", href: "/blinds", size: "large" },
    { title: "S-Fold Curtains", image: "/assets/curtain_hero.png", href: "/curtains", size: "large" },
    { title: "Plantation Shutters", image: "/assets/Landing_Page_Sample.png", href: "/shutters", size: "small" }, // Using sample as shutter proxy if needed or just stock
    { title: "Security Doors", image: "/assets/security_door_hero.png", href: "/security", size: "small" },
    { title: "Outdoor Awnings", image: "/assets/awning_hero.png", href: "/awnings", size: "wide" },
];

export function CategoryGrid() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-mcb-terracotta font-bold tracking-widest uppercase text-sm mb-4 block">Our Collection</span>
                    <h2 className="font-serif text-4xl md:text-5xl text-mcb-charcoal mb-6">Tailored to Your Home</h2>
                    <p className="text-stone-500 max-w-2xl mx-auto text-lg">Explore our range of premium window furnishings, custom-made to elevate your interior style and comfort.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]">
                    {CATEGORIES.map((cat, idx) => (
                        <Link
                            key={idx}
                            href={cat.href}
                            className={`group relative overflow-hidden rounded-sm cursor-pointer ${cat.size === 'wide' ? 'md:col-span-2 md:row-span-1' :
                                cat.size === 'large' ? 'md:col-span-2 md:row-span-2' :
                                    'md:col-span-1 md:row-span-1'
                                }`}
                        >
                            <Image
                                src={cat.image}
                                alt={cat.title}
                                fill
                                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />

                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <h3 className="text-white font-serif text-2xl mb-2">{cat.title}</h3>
                                <div className="flex items-center gap-2 text-white/0 group-hover:text-white/100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                                    <span className="text-sm font-bold uppercase tracking-wider">Explore</span>
                                    <ArrowRight size={16} />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
