import { ProductTemplate } from "@/components/ProductTemplate";

export default function AwningsPage() {
    return (
        <ProductTemplate
            title="Outdoor"
            subtitle="Extend your living space with our premium outdoor shading solutions."
            heroImage="/assets/awning_hero.png"
            description="Embrace the Australian lifestyle with our comprehensive range of outdoor living products. From retractable awnings to track-guided blinds, we help you create stylish, protected outdoor spaces usable year-round."
            features={[
                {
                    title: "Sun & Heat Control",
                    description: "Block up to 90% of harmful UV rays and heat, keeping your outdoor and indoor areas significantly cooler."
                },
                {
                    title: "Wind Resistant",
                    description: "Our systems are engineered for Australian conditions, capable of withstanding high winds with durable retention systems."
                },
                {
                    title: "Seamless Integration",
                    description: "Designed to blend perfectly with your home's architecture, available in a wide range of powder-coated colours."
                }
            ]}
            types={[
                {
                    title: "Folding Arm Awnings",
                    description: "Create an instant alfresco dining area. Retracts neatly against the wall when not in use for an unobtrusive look.",
                    image: "/assets/folding_arm_awning.png"
                },
                {
                    title: "Auto Guide Awnings",
                    description: "The classic Australian sun solution. Perfect for ground floor windows, offering privacy and excellent heat reduction.",
                    image: "/assets/auto_guide_awning.png"
                },
                {
                    title: "Zipscreen Blinds",
                    description: "Turn your pergola into an outdoor room. These track-guided blinds seal off the elements for year-round entertaining.",
                    image: "/assets/zipscreen_blinds.png"
                }
            ]}
        />
    );
}
