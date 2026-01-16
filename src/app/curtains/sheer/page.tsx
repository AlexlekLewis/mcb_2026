import { ProductTemplate } from "@/components/ProductTemplate";

export default function SheerCurtainsPage() {
    return (
        <ProductTemplate
            title="Sheer Curtains"
            subtitle="Diffuse light and create an ethereal atmosphere."
            heroImage="/assets/sheer_curtains.png"
            description="Sheer curtains are the ultimate tool for mood lighting. They soften harsh sunlight, provide daytime privacy by obscuring the view in, and add a layer of texture and movement to your windows without blocking the connection to the outdoors."
            features={[
                {
                    title: "Light Control",
                    description: "Filter UV rays to protect furniture while maintaining a bright, airy room."
                },
                {
                    title: "Daytime Privacy",
                    description: "See out clearly while preventing passers-by from seeing in during the day."
                },
                {
                    title: "Softening Layer",
                    description: "Perfect for layering under blockout curtains or over roller blinds."
                }
            ]}
            types={[
                {
                    title: "Voile",
                    description: "Silky smooth and very transparent for a minimalist look.",
                    image: "/assets/sheer_curtains.png"
                },
                {
                    title: "Linen-Look Sheer",
                    description: "Textured weaves that add organic warmth and character.",
                    image: "/assets/sheer_curtains.png"
                }
            ]}
        />
    );
}
