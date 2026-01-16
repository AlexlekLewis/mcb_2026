
export interface Product {
    slug: string;
    category: string;
    title: string;
    description: string;
    heroImage: string;
    intro: {
        heading: string;
        body: string;
    };
    features: {
        title: string;
        description: string;
    }[];
    faq: {
        question: string;
        answer: string;
    }[];
}

export const productData: Product[] = [
    // 1. Curtains
    {
        slug: "sheer-curtains",
        category: "Curtains",
        title: "Custom Sheer Curtains Melbourne | S-Fold & Wave Fold Specialists",
        description: "Soften your home with our premium custom-made Sheer Curtains. Expertly crafted in Melbourne. Available in S-Fold, Pencil Pleat, and Pinch Pleat. Book a Free Measure.",
        heroImage: "/images/sheer-curtains-hero.jpg",
        intro: {
            heading: "Sheer Curtains: The Essence of Soft Minimalism",
            body: "Transform your living space with the ethereal beauty of Custom Sheer Curtains. Designed to diffuse natural light while providing daytime privacy, our sheers add a layer of sophisticated softness to any room. Whether you prefer the modern, fluid lines of an S-Fold (Wave Fold) heading or the classic elegance of a Pinch Pleat, our collection features organic textures and linen-look fabrics that bring the outdoors in."
        },
        features: [
            { title: "Light Diffusion", description: "Filters harsh UV rays, protecting your furniture while keeping the room bright." },
            { title: "Daytime Privacy", description: "See out without being seen in." },
            { title: "S-Fold Heading", description: "The signature 'waving' track system that creates perfect, uniform folds from ceiling to floor." },
            { title: "Australian Made", description: "Hand-finished in Melbourne for superior quality." }
        ],
        faq: [
            { question: "Do sheer curtains provide privacy at night?", answer: "No, sheer curtains are transparent when the lights are on inside at night. We recommend pairing them with Blockout Roller Blinds or a Blockout Lining for complete night-time privacy." },
            { question: "What is the best track for sheer curtains?", answer: "The S-Fold (or Wave Fold) track is the most popular choice for modern homes. It allows the fabric to drape in soft, continuous waves, creating a high-end, architectural look." }
        ]
    },
    {
        slug: "blockout-curtains",
        category: "Curtains",
        title: "Premium Blockout Curtains | Total Privacy & Thermal Insulation",
        description: "Sleep better and save on energy bills with our heavy-duty Blockout Curtains. 100% light blocking fabrics. Perfect for bedrooms and media rooms.",
        heroImage: "/images/blockout-curtains-hero.jpg",
        intro: {
            heading: "Blockout Curtains: Sanctuary & Silence",
            body: "Create your personal sanctuary with our heavy-duty Blockout Curtains. Engineered for total light exclusion and superior thermal insulation, these curtains are essential for Australian homes. By trapping a layer of air between the fabric and the window, they keep your home cool in summer and warm in winter, significantly reducing energy costs while ensuring a perfect night's sleep."
        },
        features: [
            { title: "100% Light Block", description: "Ideal for shift workers, nurseries, and home theatre rooms." },
            { title: "Thermal Efficiency", description: "Reduces heat transfer by up to 40%, lowering reliance on air conditioning." },
            { title: "Acoustic Dampening", description: "Heavy fabrics help absorb street noise for a quieter home." },
            { title: "Luxurious Drape", description: "Available in weighted fabrics that pool beautifully for a sense of grandeur." }
        ],
        faq: [
            { question: "What is the specific difference between thermal and blockout curtains?", answer: "All blockout curtains offer thermal benefits due to their density and coating. However, dedicated Thermal Curtains may have a specific flocked backing designed to maximize insulation. Our Blockout range acts as both." }
        ]
    },
    // 2. Roller Blinds
    {
        slug: "blockout-roller-blinds",
        category: "Roller Blinds",
        title: "Custom Blockout Roller Blinds | 100% Privacy & Light Control",
        description: "The ultimate solution for privacy. Sleek, durable Blockout Roller Blinds. Custom made in Melbourne. Huge range of colors and textures.",
        heroImage: "/images/blockout-roller-hero.jpg",
        intro: {
            heading: "Blockout Roller Blinds: Sleek & Functional",
            body: "The standard for modern functionality, our Blockout Roller Blinds offer a clean, minimalist aesthetic with maximum performance. When rolled down, they provide complete privacy and darkness. When rolled up, they disappear into a discreet pelmet or cassette, leaving your view completely unobstructed."
        },
        features: [
            { title: "Ultimate Privacy", description: "Prevents silhouettes and shadows from being seen from outside." },
            { title: "Space Saving", description: "Fits neatly into the window reveal (Recess Fit) for a streamlined look." },
            { title: "Durable Fabrics", description: "Fade-resistant and easy to wipe clean." },
            { title: "Motorisation Ready", description: "Compatible with Somfy and Automate motors for cord-free operation." }
        ],
        faq: []
    },
    {
        slug: "double-roller-blinds",
        category: "Roller Blinds",
        title: "Double Roller Blinds | The Best of Both Worlds",
        description: "Combine a Sheer/Sunscreen blind with a Blockout blind on a single bracket. Day/Night Roller Blinds for 24/7 flexibility.",
        heroImage: "/images/double-roller-hero.jpg",
        intro: {
            heading: "Double Roller Blinds: 24/7 Flexibility",
            body: "Why choose between views and privacy when you can have both? Our Double Roller Blinds features two blinds on a single bracket: a Sunscreen or Light Filtering blind for the day, and a Blockout blind for the night. This dual system gives you complete control over your environment at any hour."
        },
        features: [],
        faq: [
            { question: "Can Double Roller Blinds fit in a standard window reveal?", answer: "Yes, but they require more depth than a single blind. Generally, a window depth of 85mm to 100mm is required for a fully recessed fit. If your frame is shallower, a Face Fit installation is recommended." }
        ]
    },
    // 3. Plantation Shutters
    {
        slug: "pvc-plantation-shutters",
        category: "Shutters",
        title: "Moisture Resistant PVC Shutters | Kitchen & Bathroom Specialists",
        description: "Waterproof PVC Plantation Shutters backed by an aluminium core. The perfect choice for wet areas like bathrooms and kitchens. 20-Year Warranty.",
        heroImage: "/images/pvc-shutters.jpg",
        intro: {
            heading: "PVC Plantation Shutters: Durability Meets Style",
            body: "Engineered for longevity, our PVC Plantation Shutters are the ultimate choice for Australian wet areas. Unlike timber, which can warp in humid conditions, our high-grade PVC is completely moisture-resistant. Reinforced with an aluminium core for structural integrity, these shutters offer the timeless look of painted wood with unmatched durability."
        },
        features: [
            { title: "Waterproof", description: "Perfect for bathrooms, laundries, and kitchens." },
            { title: "Aluminium Core", description: "Prevents sagging, even on wide panels." },
            { title: "Easy Clean", description: "Simply wipe down with a damp cloth." },
            { title: "Insulating", description: "The hollow or cellular structure of the blades provides excellent thermal protection." }
        ],
        faq: []
    },
    // 4. Security Doors
    {
        slug: "invisi-gard-security-doors",
        category: "Security",
        title: "Invisi-Gard Security Doors | 316 Marine Grade Stainless Steel",
        description: "Secure your home without losing the view. Invisi-Gard uses 316 Marine Grade Stainless Steel Mesh for maximum strength and clarity. Triple lock protection.",
        heroImage: "/images/invisi-gard.jpg",
        intro: {
            heading: "Invisi-Gard: Strength Without Compromise",
            body: "Don't live behind bars. Invisi-Gard Security Doors provide the highest level of protection while maintaining near-invisible clarity. Utilising 316 Marine Grade Stainless Steel Mesh, these doors effectively resist knife attacks, impact, and corrosion. Secured by a patented pressure retention system (no screws or rivets into the mesh), Invisi-Gard is the premium choice for safety-conscious homeowners who value aesthetics."
        },
        features: [
            { title: "316 Marine Grade Stainless Steel", description: "Superior corrosion resistance compared to standard 304 grade." },
            { title: "Triple Point Lock", description: "Three locking points for maximum anti-pry protection." },
            { title: "Patented EGP Retention System", description: "Ensures the mesh cannot be kicked out of the frame." },
            { title: "Bushfire Rated", description: "Suitable for homes in bushfire-prone areas (BAL-40)." }
        ],
        faq: []
    },
    // 5. Outdoor Living
    {
        slug: "zip-screen-blinds",
        category: "Outdoor",
        title: "Outdoor Zip Screen Blinds | Enclose Your Alfresco Area",
        description: "Turn your outdoor area into a year-round room. Zip Screen Blinds block wind, rain, and sun. Custom made for Australian conditions.",
        heroImage: "/images/zip-screen.jpg",
        intro: {
            heading: "Zip Screen Blinds: Expanding Your Living Space",
            body: "Take control of your outdoor entertainment area with Zip Screen Blinds. Designed to seamlessly enclose patios, verandahs, and balconies, these track-guided blinds protect against wind, rain, sun, and insects. By effectively sealing the space, you can entertain guests year-round, regardless of the Melbourne weather."
        },
        features: [
            { title: "Track-Guided System", description: "The fabric is locked into side tracks, preventing gaps and flapping in the wind." },
            { title: "Sun & UV Protection", description: "Blocks up to 90% of heat and UV rays before they hit your glass." },
            { title: "Insect Protection", description: "Creates a sealed barrier against mosquitoes and flies." },
            { title: "Motorised Options", description: "Control your outdoor climate with the touch of a button." }
        ],
        faq: []
    },
    // 6. Motorisation
    {
        slug: "motorisation",
        category: "Automation",
        title: "Smart Blinds Motorisation | Somfy & Automate Experts",
        description: "Upgrade to smart living. Voice control your curtains and blinds with Somfy and Automate solutions. Compatible with Google Home and Alexa.",
        heroImage: "/images/motorisation.jpg",
        intro: {
            heading: "Motorisation: The Future of Window Furnishings",
            body: "Experience the ultimate in convenience and luxury with our Motorised Curtains and Blinds. Whether you're building a new smart home or retrofitting an existing one, our range of Somfy and Automate motors allows you to control your natural light with a remote, smartphone app, or voice command."
        },
        features: [
            { title: "Child Safety", description: "Removes dangerous cords and chains, making it the safest option for families." },
            { title: "Convenience", description: "Open all blinds in the morning with a single voice command ('Hey Google, Good Morning')." },
            { title: "Security", description: "Set 'Holiday Mode' to open and close blinds at random times, making your home look occupied when you're away." },
            { title: "Energy Efficiency", description: "Use sun sensors to automatically lower blinds during the hottest part of the day to protect your interiors." }
        ],
        faq: []
    }
];
