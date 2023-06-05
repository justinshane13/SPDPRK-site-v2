import SectorPage from '@/comps/SectorPage';

const Restaurant = () => {
    return (
        <SectorPage
            name="Restaurants, Bars, Nightclubs, Casinos"
            description={[
                "Parking solutions play a vital role in ensuring convenience and a positive experience for guests at leisure destinations. Swift and seamless entry and exit from parking facilities are essential for enhancing convenience. Therefore, it is crucial to implement a reliable and adaptable parking management system that can be customized to meet the specific requirements of the destination.",
                "With our extensive experience of over 45 years in providing flexible parking management solutions, we are well-equipped to offer personalized guidance and tailored solutions for any leisure destination. We understand the unique needs of such locations and can provide expert advice on implementing a parking management system that optimally caters to those needs. Our goal is to enhance the overall guest experience by providing a parking solution that is dependable, efficient, and perfectly aligned with the specific requirements of the destination.",
                "As an example, SPDPRK has worked specifically with the back house of BALLYS Casino players cards. We can use the casino parameters for rewards of points to allow free or discounted parking."
            ]}
            image="/restaurant_image.jpg"
            characteristics={[
                {
                    image: "/sector_frequent_white_new.svg",
                    text: "Frequent Parker Programs"
                },
                {
                    image: "/sector_valid_white_new.svg",
                    text: "Validation Systems"
                },
                {
                    image: "/sector_prepay_white.svg",
                    text: "Prepay Options"
                },
                {
                    image: "/sector_valet_white.svg",
                    text: "Valet Systems"
                }
            ]}
        />
    );
}
 
export default Restaurant