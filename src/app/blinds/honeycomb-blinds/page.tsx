import { ProductTemplate } from "@/components/ProductTemplate";

export default function HoneycombBlindsPage() {
    return (
        <ProductTemplate
            title="Honeycomb Blinds"
            subtitle="The ultimate energy-saving window covering."
            heroImage="/assets/honeycomb_blinds.png"
            description="Also known as Cellular Blinds, Honeycomb blinds feature a unique hexagonal cell structure that traps air, creating an insulating barrier against summer heat and winter cold. They are incredibly efficient and stack away to almost nothing."
            features={[
                {
                    title: "Thermal Efficiency",
                    description: "Can reduce heat loss through windows by up to 60%, significantly lowering your energy bills."
                },
                {
                    title: "Top-Down / Bottom-Up",
                    description: "Lower from the top to let light in while keeping the bottom closed for privacy. Distinctive and versatile."
                },
                {
                    title: "Minimal Stack",
                    description: "When raised, the blind compresses into a tiny stack, preserving maximum view."
                }
            ]}
            types={[
                {
                    title: "Single Cell",
                    description: "A single layer of air pockets. Lightweight and compact.",
                    image: "/assets/honeycomb_blinds.png"
                },
                {
                    title: "Double Cell",
                    description: "Two layers of cells for maximum thermal protection and total blockout capabilities.",
                    image: "/assets/honeycomb_blinds.png"
                }
            ]}
        />
    );
}
