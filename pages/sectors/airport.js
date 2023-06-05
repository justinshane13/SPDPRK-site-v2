import SectorPage from '@/comps/SectorPage';

const Airport = () => {
    return (
        <SectorPage
            name="Airport & Off-Airport"
            description={[
                "Airports serve as vibrant hubs connecting business leaders, adventurous explorers, and families alike. Travelers seek a hassle-free journey, desiring smooth transitions to and from their destinations. At SPDPRK, we excel in delivering unparalleled convenience, exceptional service, and a comprehensive range of amenities. Our commitment lies in offering the most extensive product lineup within the industry.",
                "Through innovative solutions such as frequent parker programs, frictionless License Plate Recognition (LPR) technology, Advanced reservations and dedicated valet services, we ensure that your patrons enjoy a seamless parking experience before and after their travels. With SPDPRK, you can confidently provide your customers with a truly effortless and enjoyable journey."
            ]}
            image="/airport_image.jpg"
            characteristics={[
                {
                    image: "/sector_lightning_white_new.svg",
                    text: "Fast Throughput"
                },
                {
                    image: "/sector_lic_plate_white_new.svg",
                    text: "License Plate Recognition"
                },
                {
                    image: "/sector_reservation_white_new.svg",
                    text: "Reservations"
                },
                {
                    image: "/sector_frequent_white_new.svg",
                    text: "Frequent Parker Programs"
                }
            ]}
        />
    );
}
 
export default Airport;