import { ProductTemplate } from "@/components/ProductTemplate";
import { getNearbyLocations } from "@/lib/locations";

export default function ShuttersPage() {
    const nearby = getNearbyLocations('shutters', 8);

    return (
        <ProductTemplate
            nearbyLocations={nearby}
            title="Plantation Shutters"
            subtitle="Timeless elegance and superior light control."
            heroImage="/assets/Landing_Page_Sample.png" // Using the sample image which looks like a nice interior scene
            description="Transform your windows into furniture with our exquisite Plantation Shutters. Custom-designed to fit any shape or size, they offer the ultimate flexibility in light, privacy, and airflow control."
            features={[
                {
                    title: "Insulating & Efficient",
                    description: "Shutters provide an excellent thermal barrier, trapping air against the window to keep your home comfortable year-round."
                },
                {
                    title: "Moisture Resistant",
                    description: "Our high-tech PVC shutters are perfect for wet areas like bathrooms and kitchens, guaranteed not to warp, crack, or peel."
                },
                {
                    title: "Timber Craftsmanship",
                    description: "For living areas, choose our premium Basswood timber shutters for a lightweight, natural finish that exudes luxury."
                }
            ]}
            types={[
                {
                    title: "Timber Shutters",
                    description: "Crafted from premium, sustainable Basswood. Lightweight and stained or painted to perfection for a classic look.",
                    image: "/assets/timber_shutters.png" // Updated
                },
                {
                    title: "PVC Shutters",
                    description: "Durable, easy to clean, and water-resistant. The ideal choice for high-humidity areas and busy family homes.",
                    image: "/assets/pvc_shutters_bathroom.png" // Updated
                },
                {
                    title: "Outdoor Shutters",
                    description: "Aluminium shutters designed to withstand the Melbourne weather. Enclose your patio or balcony for all-season use.",
                    image: "/assets/outdoor_shutters_balcony.png" // Updated
                }
            ]}
        />
    );
}
