"use client";

import Script from "next/script";

export function GoogleReviewsWidget() {
    return (
        <div className="w-full bg-white py-4 overflow-hidden">
            <div className="container mx-auto">
                <div className="relative w-[133%] -ml-[16.5%] transform scale-75 origin-top">
                    <Script
                        src="https://static.elfsight.com/platform/platform.js"
                        strategy="lazyOnload"
                        async
                    />
                    <div className="elfsight-app-7befc592-9c56-4e59-8c2d-5b7073681391" data-elfsight-app-lazy></div>
                </div>
            </div>
        </div>
    );
}
