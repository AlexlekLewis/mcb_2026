import { ProductTemplate } from "@/components/ProductTemplate";

export default function MotorisationPage() {
    return (
        <ProductTemplate
            title="Smart Motorisation"
            subtitle="Effortless control at your fingertips."
            heroImage="/assets/roller_blind_hero.png" // Reusing appropriate image
            description="Step into the future of home living. Our motorisation solutions integrate seamlessly with your lifestyle, offering convenience, safety, and energy efficiency."
            features={[
                {
                    title: "Wire-Free Options",
                    description: "No need for an electrician. Our rechargeable battery motors are easy to install and last months on a single charge."
                },
                {
                    title: "App Control",
                    description: "Control your blinds from anywhere in the world using your smartphone. Set scenes, timers, and automate your day."
                },
                {
                    title: "Voice Integration",
                    description: "Compatible with Google Home, Amazon Alexa, and Apple HomeKit for true hands-free operation."
                }
            ]}
            types={[
                {
                    title: "Motorised Rollers",
                    description: "The most popular choice for automation. Perfect for hard-to-reach windows and managing banks of blinds simultaneously.",
                    image: "/assets/motorised_rollers.png" // Updated
                },
                {
                    title: "Motorised Curtains",
                    description: "Add a touch of luxury with curtains that glide open at sunrise. Protect high-end fabrics from handling damage.",
                    image: "/assets/motorised_curtains.png" // Reusing appropriate image
                },
                {
                    title: "Smart Hubs",
                    description: "The brain of your operation. Connect your blinds to your Wi-Fi network for app control and third-party integration.",
                    image: "/assets/smart_hub_blinds.png" // Updated
                }
            ]}
        />
    );
}
