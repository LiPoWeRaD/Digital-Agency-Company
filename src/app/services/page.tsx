import BoxLogo from "../svg/boxLogo"
import Btn from "../ul/btn"
import DesignServices from "../ul/DesignServices"


const Services = () => {
    return (
        <main className="bg-grey15">
            <section className="container mx-auto bg-grey15">
                <div className="relative z-20 flex flex-col items-center bg-[#ACFF2433]">
                    <div className="absolute z-10 saturate-0 brightness-30 opacity-60 bg-[image:var(--bg-abstractService)] bg-no-repeat bg-cover bg-[center] w-full h-full "></div>
                    <div className="absolute z-20 opacity-60 bg-[image:var(--bg-hero1)] w-full h-full"></div>
                    <h2 className="mt-[20px] md:mt-[120px] mb-10 text-[28px] md:text-[48px] font-semibold z-10">Our Services</h2>
                    <p className="mb-[120px] text-lg z-10 text-center">Transform your brand with our innovative digital solutions that captivate and engage your audience.</p>
                </div>
            </section>
            <section className="container mx-auto border border-grey20">
                <div className="mx-[50px] mb-[50px] grid grid-cols-1">
                    <h2 className="mt-[20px] md:mt-[120px] mb-10 text-[28px] md:text-[48px] font-semibold">Design</h2>
                    <p className="mb-[50px] text-lg w-4/5">{`At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. 
                        We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.`}</p>
                    <Btn className="w-fit" title="Our design services include:" bgColor={false} />
                </div>
                <div className="grid grid-cols-1 border border-grey20">
                    <DesignServices 
                        title="User Experience (UX) Design" 
                        img1="/images/Design/Research.png" 
                        img2="/images/Design/Information.png" 
                        img3="/images/Design/Interactive.png" 
                        img4="/images/Design/UIDesign.png" 
                        description1="User Research and Persona Development"
                        description2="Information Architecture and Wireframing"
                        description3="Interactive Prototyping and User Testing"
                        description4="UI Design and Visual Branding"
                    />
                    <DesignServices 
                        title="User Interface (UI) Design" 
                        img1="/images/Design/Intuitive.png" 
                        img2="/images/Design/Iconography.png" 
                        img3="/images/Design/Typography.png" 
                        img4="/images/Design/Responsive.png" 
                        description1="Intuitive and Visually Appealing Interface Design"
                        description2="Custom Iconography and Illustration"
                        description3="Typography and Color Palette Selection"
                        description4="Responsive Design for Various Devices"
                    />
                    <DesignServices 
                        title="Branding and Identity" 
                        img1="/images/Design/Identity.png" 
                        img2="/images/Design/Strategy.png" 
                        img3="/images/Design/Guidelines.png" 
                        img4="/images/Design/Marketing.png" 
                        description1="Logo Design and Visual Identity Development"
                        description2="Brand Strategy and Positioning"
                        description3="Brand Guidelines and Style Guides"
                        description4="Marketing Collateral Design (Brochures, Business Cards, etc.)"
                    />
                </div>
            </section>
            <section className="container mx-auto border border-grey20">
                <div className="mx-[50px] mb-[50px] grid grid-cols-1">
                    <h2 className="mt-[20px] md:mt-[120px] mb-10 text-[28px] md:text-[48px] font-semibold">Engineering</h2>
                    <p className="mb-[50px] text-lg w-4/5">Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. 
                        We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.</p>
                    <Btn className="w-fit" title="Our engineering services include:" bgColor={false} />
                </div>
                <div className="grid grid-cols-1 border border-grey20">
                    <DesignServices 
                            title="Web Development" 
                            img1="/images/Engineering/Front-End.png" 
                            img2="/images/Engineering/Back-End.png" 
                            img3="/images/Engineering/Content.png" 
                            img4="/images/Engineering/E-Commerce.png" 
                            description1="Front-End Development (HTML, CSS, JavaScript)"
                            description2="Back-End Development (PHP, Python, Ruby)"
                            description3="Content Management System (CMS) Development (WordPress, Drupal)"
                            description4="E-Commerce Platform Development (Magento, Shopify)"
                        />
                        <DesignServices 
                            title="Mobile App Development" 
                            img1="/images/Engineering/Native.png" 
                            img2="/images/Engineering/Cross-Platform.png" 
                            img3="/images/Engineering/Prototyping.png" 
                            img4="/images/Engineering/Testing.png" 
                            description1="Native iOS and Android App Development"
                            description2="Cross-Platform App Development (React Native, Flutter)"
                            description3="App Prototyping and UI/UX Design Integration"
                            description4="App Testing, Deployment, and Maintenance"
                        />
                        <DesignServices 
                            title="Custom Software Development" 
                            img1="/images/Engineering/Enterprise.png" 
                            img2="/images/Engineering/Application.png" 
                            img3="/images/Engineering/Integration.png" 
                            img4="/images/Engineering/Legacy.png" 
                            description1="Enterprise Software Development"
                            description2="Custom Web Application Development"
                            description3="Integration with Third-Party APIs and Systems"
                            description4="Legacy System Modernization and Migration"
                        />
                </div>
            </section>
            <section className="container mx-auto border border-grey20">
                <div className="mx-[50px] mb-[50px] grid grid-cols-1">
                    <h2 className="mt-[20px] md:mt-[120px] mb-10 text-[28px] md:text-[48px] font-semibold">Project Management</h2>
                    <p className="mb-[50px] text-lg w-4/5">Our experienced project management team ensures that your projects are delivered on time, within budget, 
                        and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.</p>
                    <Btn className="w-fit" title="Our project management services include:" bgColor={false} />
                </div>
                <div className="grid grid-cols-1 border border-grey20">
                    <DesignServices 
                        title="Project Planning and Scoping" 
                        img1="/images/ProjectManagement/Requirements.png" 
                        img2="/images/ProjectManagement/Project.png" 
                        img3="/images/ProjectManagement/Resource.png" 
                        img4="/images/ProjectManagement/Risk.png" 
                        description1="Requirements Gathering and Analysis"
                        description2="Project Roadmap and Timeline Development"
                        description3="Resource Allocation and Task Assignment"
                        description4="Risk Assessment and Mitigation Strategies"
                            />
                    <DesignServices 
                        title="Agile Development" 
                        img1="/images/ProjectManagement/Iterative.png" 
                        img2="/images/ProjectManagement/Scrum.png" 
                        img3="/images/ProjectManagement/Regular.png" 
                        img4="/images/ProjectManagement/Continuous.png" 
                        description1="Iterative Development and Sprints"
                        description2="Scrum or Kanban Methodology Implementation"
                        description3="Regular Progress Updates and Demos"
                        description4="Continuous Improvement and Feedback Incorporation"
                    />
                    <DesignServices 
                        title="Quality Assurance and Testing" 
                        img1="/images/ProjectManagement/Test.png" 
                        img2="/images/ProjectManagement/Functional.png" 
                        img3="/images/ProjectManagement/Performance.png" 
                        img4="/images/ProjectManagement/Bug.png" 
                        description1="Test Planning and Execution"
                        description2="Functional and Usability Testing"
                        description3="Performance and Security Testing"
                        description4="Bug Tracking and Issue Resolution"
                    />
                </div>
            </section>
            <section className="container mx-auto bg-grey15">
                <div className="relative z-20 flex flex-col items-center bg-[#ACFF2433]">
                    <div className="absolute z-10 saturate-0 brightness-30 opacity-60 bg-[image:var(--bg-abstractService)] bg-no-repeat bg-cover bg-[center] w-full h-full "></div>
                    <div className="absolute z-20 opacity-60 bg-[image:var(--bg-hero1)] w-full h-full"></div>
                    <p className="mt-[20px] md:mt-[120px] mb-[50px] px-[19px] py-[16px] flex items-center justify-center bg-green50 rounded-[8px] z-30"><BoxLogo width={40} height={44} /></p>
                    <h2 className=" mb-10 text-[28px] lg:text-[48px] text-center font-semibold z-10">Let us Bring your Ideas to Life in the Digital World.</h2>
                    <p className="mb-[120px] w-5/6 text-center text-lg z-10">{`No matter which services you choose, we are committed to delivering exceptional results that exceed your expectations. 
                        Our multidisciplinary team works closely together to ensure seamless collaboration and a unified vision for your digital product..`}</p>
                    <Btn className="mb-[50px] lg:mb-[100px] xl:mb-[120px] w-fit z-20" title="Start Project" link="/" />
                </div>
            </section>
        </main>
    )
}

export default Services