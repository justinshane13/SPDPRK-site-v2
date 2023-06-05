import SectorPage from '@/comps/SectorPage';

const Hospital = () => {
    return (
        <SectorPage
            name="Hospitals"
            description={[
                "Hospital parking presents unique challenges due to the high traffic intensity during peak times and multiple user groups. Visitors should be able to park their vehicles without worrying about parking issues. SPDPRK with its extensive experience in hospital parking solutions, can provide a sensitive and comprehensive approach to address these complex needs and concerns.",
                "Healthcare campuses have transformed into an array of services catering to visitors' needs. At SPDPRK, we understand the importance of creating a seamless experience for patients, employees, tenants, and retail visitors. That's why we offer innovative solutions such as web-based validations, wayfinding , and automated valet services. By embracing these options, we alleviate the stress and simplify the parking process, allowing individuals to focus on what truly matters—their well-being and the tasks at hand."
            ]}
            image="/hospital_image.jpg"
            characteristics={[
                {
                    image: "/sector_valet_white.svg",
                    text: "Valet Systems"
                },
                {
                    image: "/sector_mobile_white_new.svg",
                    text: "SPDPRK Mobile Integration"
                },
                {
                    image: "/sector_directions_white.svg",
                    text: "Wayfinding — Lot Counts & Direction"
                },
                {
                    image: "/sector_access_white.svg",
                    text: "Simplified Access Control"
                }
            ]}
        />
    );
}
 
export default Hospital;