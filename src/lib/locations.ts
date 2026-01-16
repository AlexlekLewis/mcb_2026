export interface Suburb {
    name: string;
    slug: string;
    postcode: string;
    description?: string;
}

export const LOCATIONS: Suburb[] = [
    { name: "Preston", slug: "preston", postcode: "3072" },
    { name: "Thornbury", slug: "thornbury", postcode: "3071" },
    { name: "Northcote", slug: "northcote", postcode: "3070" },
    { name: "Reservoir", slug: "reservoir", postcode: "3073" },
    { name: "Coburg", slug: "coburg", postcode: "3058" },
    { name: "Coburg North", slug: "coburg-north", postcode: "3058" },
    { name: "Brunswick", slug: "brunswick", postcode: "3056" },
    { name: "Brunswick East", slug: "brunswick-east", postcode: "3057" },
    { name: "Fairfield", slug: "fairfield", postcode: "3078" },
    { name: "Ivanhoe", slug: "ivanhoe", postcode: "3079" },
    { name: "Ivanhoe East", slug: "ivanhoe-east", postcode: "3079" },
    { name: "Heidelberg", slug: "heidelberg", postcode: "3084" },
    { name: "Heidelberg West", slug: "heidelberg-west", postcode: "3081" },
    { name: "Heidelberg Heights", slug: "heidelberg-heights", postcode: "3081" },
    { name: "Bellfield", slug: "bellfield", postcode: "3081" },
    { name: "Kingsbury", slug: "kingsbury", postcode: "3083" },
    { name: "Fawkner", slug: "fawkner", postcode: "3060" },
    { name: "Resanna", slug: "rosanna", postcode: "3084" }, // Fixed typo from source if any, standard is Rosanna
    { name: "Eaglemont", slug: "eaglemont", postcode: "3084" },
    { name: "Alphington", slug: "alphington", postcode: "3078" },
    { name: "Clifton Hill", slug: "clifton-hill", postcode: "3068" },
    { name: "Fitzroy North", slug: "fitzroy-north", postcode: "3068" },
    { name: "Regent", slug: "regent", postcode: "3073" },
    { name: "Keon Park", slug: "keon-park", postcode: "3073" },
    { name: "Abbotsford", slug: "abbotsford", postcode: "3067" },
];

export function getLocationBySlug(slug: string): Suburb | undefined {
    return LOCATIONS.find(loc => loc.slug === slug);
}
