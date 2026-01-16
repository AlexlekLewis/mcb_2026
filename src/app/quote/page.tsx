import QuoteForm from "@/components/QuoteForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Request a Free Quote | Modern Curtains and Blinds",
    description: "Book a free measure and quote for custom curtains, blinds, shutters, and security doors in Melbourne.",
};

import { Suspense } from "react";

export default function QuotePage() {
    return (
        <div className="pt-20">
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading form...</div>}>
                <QuoteForm />
            </Suspense>
        </div>
    );
}
