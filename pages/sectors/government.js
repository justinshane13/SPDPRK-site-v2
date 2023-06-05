import SectorPage from '@/comps/SectorPage';

const Government = () => {
    return (
        <SectorPage
            name="Government & Public Institutions"
            description={[
                "As municipalities aim to enhance services, amenities, and conveniences for their constituents, they face the challenge of doing so within constrained budgets. At SPDPRK, we recognize this need and offer a comprehensive range of on- and off-street parking solutions tailored to address these concerns. Our streamlined systems enable easier revenue and asset tracking, resulting in improved cost efficiency without compromising performance or user satisfaction. By partnering with SPDPRK, municipalities can optimize their parking operations, effectively allocate resources, and continue delivering exceptional experiences to their valued customers while maintaining fiscal responsibility.",
                "SPDPRK has decades of experience in providing smart parking solutions for college and university campuses. Our cutting-edge, user-friendly, and scalable parking solutions ensure a smooth flow of traffic, even during peak times."
            ]}
            image="/government_image.jpg"
            characteristics={[
                {
                    image: "/sector_reliability_white.svg",
                    text: "Reliability"
                },
                {
                    image: "/sector_service_white.svg",
                    text: "Service"
                },
                {
                    image: "/sector_accessible_white.svg",
                    text: "Accessibility"
                },
                {
                    image: "/sector_technology_white.svg",
                    text: "Technology"
                }
            ]}
        />
    );
}
 
export default Government;