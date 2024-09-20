import { Helmet } from 'react-helmet-async';
import Heading from '../../components/Heading';
import WebSectionPrimary from '../../components/services/web-dev/WebSectionPrimary';
import StatsGrid from '../../components/StatsGrid';
import ContactSection from '../../components/section/contact/ContactSection';
import FAQSection from '../../components/section/FAQSection';
import { WebBenefitData, webFaqs, WebRoadmapData } from '../../config';
import RoadmapSection from '../../components/section/RoadmapSection';


const WebDevPage = () => {
    return (
        <div className="relative">
            <Helmet>
                <title>Services - Website Development - DeconByte Inc.</title>
                <meta name="description" content="DeconByte Inc. is a leading software development company specializing in innovative solutions across SAAS products, Fintech, restaurant management systems, and more, empowering businesses to thrive in the digital era." />
                <meta name="keywords" content="DeconByte Inc, software development company, SAAS products, Fintech software, restaurant management systems, custom software solutions, business software development, digital transformation services, enterprise software solutions, software innovation, cloud-based software, financial technology solutions, restaurant POS systems, business process automation, software consulting, software engineering, digital business solutions, software integration services, cutting-edge software applications, technology-driven business solutions" />
                <meta property="og:title" content="Services - Website Development - DeconByte Inc." />
                <meta property="og:description" content="DeconByte Inc. is a leading software development company specializing in innovative solutions across SAAS products, Fintech, restaurant management systems, and more, empowering businesses to thrive in the digital era." />
                <meta property="og:image" content="https://media.licdn.com/dms/image/v2/D4D0BAQH7YWNtRF_8RQ/company-logo_200_200/company-logo_200_200/0/1722762257344/deconbyte_inc_logo?e=1732147200&v=beta&t=3X2LA0YqEmOnx2R2AqtB5lapAvuZsiVRT4dozVT0IaU" />
                <meta property="og:url" content="hhttps://www.linkedin.com/company/deconbyte-inc/" />
                <link rel="canonical" href="https://www.linkedin.com/company/deconbyte-inc/" />
            </Helmet>

            <Heading
                mainHeading="Website Development"
                breadcrumbs={[
                { label: "Home", path: "/" },
                { label: "Services", path: "/services" },
                { label: "Website Development", path: "/services/website-development" }
            ]}
            />
            <StatsGrid />
            <WebSectionPrimary />
            <RoadmapSection 
                title="Our Development Roadmap"
                subtitle="How we start developing a website for you"
                description="We are ready to bring your vision to life, whether you're launching a startup or growing your business. 
                    Our team is dedicated to delivering a website that aligns perfectly with your unique goals 
                    and requirements, ensuring it reflects your brand and meets your needs seamlessly."
                roadmapData={WebRoadmapData}
            />
            <RoadmapSection 
                title="Benefits"
                subtitle="Working with Us"
                description="We are ready to bring your vision to life, whether you're launching a startup or growing your business. 
                    Our team is dedicated to delivering a website that aligns perfectly with your unique goals 
                    and requirements, ensuring it reflects your brand and meets your needs seamlessly."
                roadmapData={WebBenefitData}
            />
            <FAQSection 
                title="Any Questions? Look Here" 
                description="Our dedicated team is here to help you out with any queries you have regarding our services."
                faqs={webFaqs}
            />
            <ContactSection />
        </div>
    );
}

export default WebDevPage;
