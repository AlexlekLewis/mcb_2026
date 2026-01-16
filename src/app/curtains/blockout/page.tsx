import { ProductTemplate } from "@/components/ProductTemplate";

export default function BlockoutCurtainsPage() {
    return (
        <ProductTemplate
            title="Blockout Curtains"
            subtitle="Total privacy, darkness, and thermal comfort."
            heroImage="/assets/blockout_curtains.png"
            description="Blockout curtains are essential for bedrooms and media rooms. Using coated fabrics or separate linings, they prevent light penetration, reduce noise, and offer superior insulation against heat and cold."
            features={[
                {
                    title: "Sleep Quality",
                    description: "Create a pitch-black environment perfect for shift workers and light sleepers."
                },
                {
                    title: "Energy Saving",
                    description: "Heavy lining creates an air barrier, keeping warmth in during winter and heat out in summer."
                },
                {
                    title: "Acoustic Dampening",
                    description: "Thick fabrics help to absorb sound and reduce street noise."
                }
            ]}
            types={[
                {
                    title: "Coated Blockout",
                    description: "Fabric with an integrated acrylic backing. Slim and efficient.",
                    image: "/assets/blockout_curtains.png"
                },
                {
                    title: "Lined Curtains",
                    description: "A separate lining attached to a decorative face fabric for a fuller, luxurious drape.",
                    image: "/assets/blockout_curtains.png"
                }
            ]}
        />
    );
}
