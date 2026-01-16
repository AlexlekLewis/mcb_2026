import QuoteForm from "@/components/QuoteForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Request a Free Quote | Modern Curtains and Blinds",
    description: "Book a free measure and quote for custom curtains, blinds, shutters, and security doors in Melbourne.",
};

export default function QuotePage() {
    return (
        <div className="pt-20"> {/* Add padding to account for fixed navbar if necessary, or just let the form handle it */}
            <QuoteForm />
        </div>
    );
}
