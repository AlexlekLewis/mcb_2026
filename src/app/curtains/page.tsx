import { ProductTemplate } from "@/components/ProductTemplate";

export default function CurtainsPage() {
    return (
        <ProductTemplate
            title="Custom Made Curtains"
            subtitle="Soft. Sustainable. Stylish. Elevate your Melbourne home."
            heroImage="/assets/curtain_hero.png" // Using PNG as static hero for speed/consistency, or could use GIF
            description="Experience the perfect blend of luxury and functionality with our custom-made curtains. From the flowing lines of S-Fold sheers to the insulating power of blockouts, we craft window furnishings that define your space."
            features={[
                {
                    title: "S-Fold Specialists",
                    description: "Our signature S-Fold (Wave) heading creates a continuous, soft wave that adds instant contemporary elegance to any room."
                },
                {
                    title: "Premium Fabrics",
                    description: "Sourced from the world's leading textile mills, including linen blends, textured weaves, and 100% blockouts."
                },
                {
                    title: "Melbourne Made",
                    description: "Handcrafted locally in our Melbourne facility, ensuring superior quality control and faster turnaround times."
                }
            ]}
            types={[
                {
                    title: "Sheer Curtains",
                    description: "Diffuse natural light and maintain daytime privacy while adding a soft, ethereal touch to your interior design. Perfect for living areas and layering.",
                    image: "/assets/sheer_curtains.png" // Updated
                },
                {
                    title: "Blockout Curtains",
                    description: "Achieve complete darkness and superior thermal insulation. ideal for bedrooms and media rooms, keeping your home effectively cooler in summer and warmer in winter.",
                    image: "/assets/blockout_curtains.png" // Updated
                },
                {
                    title: "Motorised Curtains",
                    description: "Experience the ultimate convenience with Somfy motorisation. Control your curtains via remote, app, or voice command for effortless modern living.",
                    image: "/assets/motorised_curtains.png" // Updated
                }
            ]}
        />
    );
}
