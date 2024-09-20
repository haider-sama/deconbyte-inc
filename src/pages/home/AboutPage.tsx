import Heading from "../../components/Heading";
import StatsGrid from "../../components/StatsGrid";
import { Helmet } from 'react-helmet-async';
import AboutSection from "../../components/section/home/AboutSection";
import AboutSectionPrimary from "../../components/section/about/AboutSectionPrimary";
import AboutSectionSecondary from "../../components/section/about/AboutSectionSecondary";
import AboutSectionTertiary from "../../components/section/about/AboutSectionTertiary";

const AboutPage = () => {
    return (
        <div className="relative">
            <Helmet>
                <title>About Us - DeconByte Inc.</title>
                <meta name="description" content="DeconByte Inc. is a leading software development company specializing in innovative solutions across SAAS products, Fintech, restaurant management systems, and more, empowering businesses to thrive in the digital era." />
                <meta name="keywords" content="DeconByte Inc, software development company, SAAS products, Fintech software, restaurant management systems, custom software solutions, business software development, digital transformation services, enterprise software solutions, software innovation, cloud-based software, financial technology solutions, restaurant POS systems, business process automation, software consulting, software engineering, digital business solutions, software integration services, cutting-edge software applications, technology-driven business solutions" />
                <meta property="og:title" content="About Us - DeconByte Inc." />
                <meta property="og:description" content="DeconByte Inc. is a leading software development company specializing in innovative solutions across SAAS products, Fintech, restaurant management systems, and more, empowering businesses to thrive in the digital era." />
                <meta property="og:image" content="https://media.licdn.com/dms/image/v2/D4D0BAQH7YWNtRF_8RQ/company-logo_200_200/company-logo_200_200/0/1722762257344/deconbyte_inc_logo?e=1732147200&v=beta&t=3X2LA0YqEmOnx2R2AqtB5lapAvuZsiVRT4dozVT0IaU" />
                <meta property="og:url" content="hhttps://www.linkedin.com/company/deconbyte-inc/" />
                <link rel="canonical" href="https://www.linkedin.com/company/deconbyte-inc/" />
            </Helmet>

            <Heading
                mainHeading="About Us"
                breadcrumbs={[
                { label: "Home", path: "/" },
                { label: "About", path: "/about" }
            ]}
            />
            <StatsGrid />
            <AboutSection />
            <AboutSectionPrimary />
            <AboutSectionSecondary />
            <AboutSectionTertiary />
        </div>
    );
}

export default AboutPage;
