import SectorPage from '@/comps/SectorPage';

const Shopping = () => {
    return (
        <SectorPage
            name="Shopping Centers & Malls"
            description={[
                "We provide a convenient validation platform for commercial organizations within your shopping center, allowing them to easily validate and cover their customers' parking expenses. While retailers may assume that offering free parking is the most effective method to attract customers, it is not always practical.",
                "Local authorities or parking facility owners recognize that providing free parking can result in an unregulated situation where spaces are hard to manage and prone to misuse. Additionally, the expenses associated with providing and maintaining parking facilities need to be financed, which can be challenging considering the limited number of available spaces."
            ]}
            image="/shopping_image.jpg"
            characteristics={[
                {
                    image: "/sector_valid_white_new.svg",
                    text: "Validations"
                },
                {
                    image: "/sector_directions_white.svg",
                    text: "Wayfinding"
                },
                {
                    image: "/sector_money_white_new.svg",
                    text: "Revenue Control"
                },
                {
                    image: "/sector_lightning_white_new.svg",
                    text: "Fast Throughput"
                }
            ]}
        />
    );
}
 
export default Shopping