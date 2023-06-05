import SectorPage from '@/comps/SectorPage';

const Sports = () => {
    return (
        <SectorPage
            name="Sports Venues & Arenas"
            description={[
                "SPDPRK simplifies the process of event parking by offering hassle-free pay-on-entry solutions with legacy offerings. A gateless system, or integration with ticket agencies, while a convenient SPDPRK portal enables effortless phone payments. Our Comprehensive offerings are specifically designed to streamline event parking, establish robust audit controls, and deliver exceptional customer service."
            ]}
            image="/sports_image.jpg"
            characteristics={[
                {
                    image: "/sector_lightning_white_new.svg",
                    text: "Fast Throughput"
                },
                {
                    image: "/sector_prepay_white.svg",
                    text: "Prepay Solutions"
                },
                {
                    image: "/sector_money_white_new.svg",
                    text: "Revenue Control"
                },
                {
                    image: "/sector_directions_white.svg",
                    text: "Wayfinding"
                }
            ]}
        />
    );
}

export default Sports