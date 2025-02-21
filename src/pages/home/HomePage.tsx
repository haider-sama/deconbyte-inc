import { Helmet } from "react-helmet-async";
import AboutSection from "../../components/section/home/AboutSection";
import InfoCard from "../../components/card/InfoCard";
import Services from "../../components/section/home/ServicesSection";
import MainHeading from "../../components/MainHeading";
import ParticlesComponent from "../../components/Particles";
import StatsGrid from "../../components/StatsGrid";
import ChooseSection from "../../components/section/home/ChooseSection";
import TeamSection from "../../components/section/home/TeamSection";
import TestimonialSection from "../../components/section/home/TestimonialSection";
import FAQSection from "../../components/section/FAQSection";
import { homeFaqs } from "../../config";
import LocationSection from "../../components/section/home/LocationSection";


const HomePage = () => {
    return (
        <>
        <Helmet>
            <title>Web Development Company & Web Design Agency - DeconByte Inc.</title>
            <meta name="description" content="DeconByte Inc. is a leading software development company specializing in innovative solutions across SAAS products, Fintech, restaurant management systems, and more, empowering businesses to thrive in the digital era." />
            <meta name="keywords" content="DeconByte Inc, " />
            <meta property="og:title" content="Home - DeconByte Inc." />
            <meta property="og:description" content="DeconByte Inc. is a leading software development company specializing in innovative solutions across SAAS products, Fintech, restaurant management systems, and more, empowering businesses to thrive in the digital era." />
            <meta property="og:image" content="https://media.licdn.com/dms/image/v2/D4D0BAQH7YWNtRF_8RQ/company-logo_200_200/company-logo_200_200/0/1722762257344/deconbyte_inc_logo?e=1732147200&v=beta&t=3X2LA0YqEmOnx2R2AqtB5lapAvuZsiVRT4dozVT0IaU" />
            <meta property="og:url" content="hhttps://www.linkedin.com/company/deconbyte-inc/" />
            <link rel="canonical" href="https://www.linkedin.com/company/deconbyte-inc/" />
        </Helmet>
        <ParticlesComponent />
        <MainHeading />
        <StatsGrid />
        <Services />
        <AboutSection />
        <ChooseSection />
        <TeamSection />
        <TestimonialSection />
        <FAQSection 
            title="Any Questions? Look Here" 
            description="Our dedicated team is here to help you out with any queries you have regarding our services."
            faqs={homeFaqs}
        />
        <LocationSection />
        <InfoCard />
        </>
    );
}

export default HomePage;
