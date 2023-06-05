import SectorPage from '@/comps/SectorPage';

const Corporate = () => {
    return (
        <SectorPage
            name="Corporate Offices & Business Parks"
            description={[
                "Office property management staff require a versatile system capable of managing employee, contract, and visitor parking seamlessly. SPDPRK offers a range of innovative products designed specifically to meet these needs. Whether you have tickets or want to be ticketless, gated or gateless, attended or automated, we can streamline these processes and maximize revenue potential.",
                "By implementing SPDPRK, your office property can optimize a parking management system that results in simpler operations, improves revenue generation, and is an overall enhanced experience for all stakeholders."
            ]}
            image="/corporate_image.jpg"
            characteristics={[
                {
                    image: "/sector_lightning_white_new.svg",
                    text: "Fast Throughput"
                },
                {
                    image: "/sector_valid_white_new.svg",
                    text: "Visitor Validations"
                },
                {
                    image: "/sector_money_white_new.svg",
                    text: "Revenue Control"
                },
                {
                    image: "/sector_lic_plate_white_new.svg",
                    text: "License Plate Recognition"
                }
            ]}
        />
    );
}
 
export default Corporate;