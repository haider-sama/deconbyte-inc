import CareerList from "../components/CareerList";
import { Helmet } from 'react-helmet-async';

const Careers = () => {
    return (
        <div className="mb-32 relative">
            <Helmet>
                <title>Careers - DeconByte Inc.</title>
                <meta name="description" content="DeconByte Inc. is a leading software development company specializing in innovative solutions across SAAS products, Fintech, restaurant management systems, and more, empowering businesses to thrive in the digital era." />
                <meta name="keywords" content="DeconByte Inc, software development company, SAAS products, Fintech software, restaurant management systems, custom software solutions, business software development, digital transformation services, enterprise software solutions, software innovation, cloud-based software, financial technology solutions, restaurant POS systems, business process automation, software consulting, software engineering, digital business solutions, software integration services, cutting-edge software applications, technology-driven business solutions" />
                <meta property="og:title" content="Careers - DeconByte Inc." />
                <meta property="og:description" content="DeconByte Inc. is a leading software development company specializing in innovative solutions across SAAS products, Fintech, restaurant management systems, and more, empowering businesses to thrive in the digital era." />
                <meta property="og:image" content="https://media.licdn.com/dms/image/v2/D4D0BAQH7YWNtRF_8RQ/company-logo_200_200/company-logo_200_200/0/1722762257344/deconbyte_inc_logo?e=1732147200&v=beta&t=3X2LA0YqEmOnx2R2AqtB5lapAvuZsiVRT4dozVT0IaU" />
                <meta property="og:url" content="hhttps://www.linkedin.com/company/deconbyte-inc/" />
                <link rel="canonical" href="https://www.linkedin.com/company/deconbyte-inc/" />
            </Helmet>
            <h1 className="mt-16 font-bold text-center text-white text-xl md:text-3xl lg:text-4xl glow-text">
               CAREERS
            </h1>
            <CareerList />
        </div>
    );
}

export default Careers;
