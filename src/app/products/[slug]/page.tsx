
import { productData } from "@/lib/data";
import { notFound } from "next/navigation";
import { Check, ChevronDown, ShieldCheck, Ruler, Calendar } from "lucide-react";
import type { Metadata } from 'next'

type Props = {
    params: { slug: string }
}

export async function generateMetadata(
    { params }: Props,
): Promise<Metadata> {
    const product = productData.find((p) => p.slug === params.slug);
    if (!product) return {};

    return {
        title: product.title,
        description: product.description,
    }
}

export function generateStaticParams() {
    return productData.map((product) => ({
        slug: product.slug,
    }))
}

export default function ProductPage({ params }: { params: { slug: string } }) {
    const product = productData.find((p) => p.slug === params.slug);

    if (!product) {
        notFound();
    }

    return (
        <div className="bg-white">
            {/* Product Header / Hero */}
            <section className="bg-stone-100 py-20 px-4">
                <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
                    <div className="aspect-square bg-white rounded-2xl shadow-xl overflow-hidden relative group">
                        {/* Image Placeholder */}
                        <div className="w-full h-full bg-stone-300 bg-[url('https://images.unsplash.com/photo-1549488352-84b675340157?q=80&w=2800&auto=format&fit=crop')] bg-cover bg-center"></div>
                    </div>

                    <div>
                        <span className="text-stone-500 font-medium tracking-wide uppercase text-sm mb-4 block">
                            {product.category}
                        </span>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6 leading-tight">
                            {product.intro.heading}
                        </h1>
                        <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                            {product.intro.body}
                        </p>

                        <div className="flex flex-col gap-4">
                            <button className="bg-stone-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-stone-800 transition-colors flex items-center justify-center gap-3">
                                <Calendar size={20} />
                                Book a Free Measure & Quote
                            </button>
                            <p className="text-xs text-center text-stone-500">
                                No obligation. available in Melbourne Metro.
                            </p>
                        </div>

                        <div className="mt-12 grid grid-cols-3 gap-4 border-t border-stone-200 pt-8">
                            <div className="text-center">
                                <div className="mx-auto bg-stone-100 w-10 h-10 rounded-full flex items-center justify-center mb-2 text-stone-900">
                                    <ShieldCheck size={20} />
                                </div>
                                <div className="font-bold text-sm">5 Year Warranty</div>
                            </div>
                            <div className="text-center">
                                <div className="mx-auto bg-stone-100 w-10 h-10 rounded-full flex items-center justify-center mb-2 text-stone-900">
                                    <Ruler size={20} />
                                </div>
                                <div className="font-bold text-sm">Custom Made</div>
                            </div>
                            <div className="text-center">
                                <div className="mx-auto bg-stone-100 w-10 h-10 rounded-full flex items-center justify-center mb-2 text-stone-900">
                                    <span className="font-bold text-xs">AU</span>
                                </div>
                                <div className="font-bold text-sm">Made in Melb</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 container mx-auto px-4 max-w-5xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-serif font-bold mb-4">Why Choose {product.category}?</h2>
                    <div className="w-20 h-1 bg-stone-900 mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
                    {product.features.map((feature, idx) => (
                        <div key={idx} className="flex gap-5">
                            <div className="shrink-0 w-12 h-12 bg-stone-900 text-white rounded-xl flex items-center justify-center font-serif text-xl italic hover:scale-110 transition-transform shadow-lg">
                                {idx + 1}
                            </div>
                            <div>
                                <h3 className="font-bold text-xl mb-2 text-stone-900">{feature.title}</h3>
                                <p className="text-stone-600 leading-relaxed">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQs SEO Section */}
            {product.faq.length > 0 && (
                <section className="bg-stone-50 py-24 px-4">
                    <div className="container mx-auto max-w-3xl">
                        <h2 className="text-3xl font-serif font-bold mb-12 text-center">Frequently Asked Questions</h2>

                        <div className="space-y-4">
                            {product.faq.map((item, idx) => (
                                <details key={idx} className="group bg-white rounded-lg shadow-sm border border-stone-100 open:shadow-md transition-all duration-300">
                                    <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-stone-900 list-none">
                                        <span>{item.question}</span>
                                        <ChevronDown className="group-open:rotate-180 transition-transform duration-300 text-stone-400" />
                                    </summary>
                                    <div className="px-6 pb-6 text-stone-600 leading-relaxed border-t border-stone-50 pt-4">
                                        {item.answer}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Bottom CTA */}
            <section className="py-24 px-4 bg-stone-900 text-white text-center">
                <div className="container mx-auto max-w-2xl">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to transform your home?</h2>
                    <p className="text-stone-400 mb-10 text-lg">Book a free in-home consultation with our design experts today.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-stone-900 px-8 py-4 rounded-full font-medium hover:bg-stone-100 transition-colors">
                            Book Free Measure
                        </button>
                        <button className="border border-stone-700 text-white px-8 py-4 rounded-full font-medium hover:bg-stone-800 transition-colors">
                            Download Brochure
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
