"use client"

import FormMain from "../components/formMain"
import BoxLogo from "../svg/boxLogo"
import ProcessCardProps from "../type/ProcessCardProps"
import Btn from "../ul/btn"
import ProcessCard from "../ul/ProcessCard"


const Process = () => {

    const processCardsList: ProcessCardProps[] = [
        {
            number: "01",
            title: "Discovery",
            description: `We begin by thoroughly understanding your business goals, target audience, and project requirements. 
                We conduct in-depth research to gather insights and define project objectives, allowing us to develop a tailored strategy.`
        },
        {
            number: "02",
            title: "Planning and Strategy",
            description: `Based on the gathered information, we create a comprehensive project plan and strategy. This includes defining project milestones, 
                timelines, deliverables, and resource allocation. We collaborate closely with you to align our strategy with your vision.`
        },
        {
            number: "03",
            title: "Design",
            description: `Our expert designers translate the project requirements into captivating visual designs. We create wireframes, mockups, and interactive prototypes to showcase the user interface, 
                user experience, and overall design aesthetics. 
                We iterate on the designs based on your feedback until we achieve the perfect look and feel.`
        },
        {
            number: "04",
            title: "Development",
            description: `Once the designs are approved, our skilled development team brings them to life. We use cutting-edge technologies and coding best practices to build robust and scalable digital products. 
                Throughout the development phase, we maintain open lines of communication to keep you updated on progress and address any questions or concerns.`
        },
        {
            number: "05",
            title: "Testing and Quality Assurance",
            description: `We conduct rigorous testing to ensure that your digital product functions flawlessly across different devices, browsers, and operating systems. 
                Our quality assurance team meticulously checks for bugs, usability issues, and performance bottlenecks. We strive for a seamless user experience and a high level of reliability.`
        },
        {
            number: "06",
            title: "Deployment and Launch",
            description: `When your digital product is thoroughly tested and meets your satisfaction, we prepare for deployment. We handle all the technical aspects of launching your product, ensuring a smooth transition 
                from development to the live environment. 
                We assist with setting up hosting, configuring servers, and managing any required integrations.`
        },
        {
            number: "07",
            title: "Post-Launch Support",
            description: `Our commitment to your success doesn't end with the launch. We provide ongoing support and maintenance services to ensure your digital product continues to perform optimally. 
                We offer different support packages based on your needs, including bug fixes, feature enhancements, security updates, and technical support.`
        },
        {
            number: "08",
            title: "Continuous Improvement",
            description: `We believe in continuous improvement and strive to optimize your digital product even after launch. We monitor user feedback, analytics, and market trends to identify opportunities for enhancement and growth. 
                We proactively suggest improvements and updates to keep your digital product ahead of the curve.`
        },
    ]


    return (
        <main className="bg-grey15">
            <section className="container mx-auto bg-grey15">
                <div className="relative z-20 flex flex-col items-center bg-[#ACFF2433]">
                    <div className="absolute z-10 saturate-0 brightness-30 opacity-60 bg-[image:var(--bg-abstractService)] bg-no-repeat bg-cover bg-[center] w-full h-full "></div>
                    <div className="absolute z-20 opacity-60 bg-[image:var(--bg-hero1)] w-full h-full"></div>
                    <h2 className="mt-10 lg:mt-[100px] mb-10 text-[28px] lg:text-[48px] text-center font-semibold z-10">Process of Starting the Project</h2>
                    <p className="mb-[120px] sm:w-5/6 text-center text-lg z-10">At SquareUp, we value transparency, collaboration, and delivering exceptional results.</p>
                </div>
            </section>
            <section className="container mx-auto border border-grey20">
                <div className="mx-[20px] sm:mx-[50px] mb-[50px] grid grid-cols-1">
                    <h2 className="mt-[20px] md:mt-[120px] mb-10 text-[28px] md:text-[48px] font-semibold">At SquareUp</h2>
                    <p className="mb-[50px] text-lg sm:w-4/5">{`We follow a structured and collaborative process to ensure the successful delivery of exceptional digital products. 
                        Our process combines industry best practices, creative thinking, and a client-centric approach.`}</p>
                    <p className="px-4 py-2 md:px-6 md:py-4 rounded-[8px] sm:w-fit bg-grey1 border border-grey20">{`Here's an overview of our typical process:`}</p>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2">
                    {processCardsList.map((item, index) => (
                        <ProcessCard key={index} title={item.title} description={item.description} number={item.number} />
                    ))}
                </ul>
            </section>
            <section className="container mx-auto bg-grey15 border border-grey20">
                <div className="relative z-20 flex flex-col items-center bg-[#ACFF2433]">
                    <div className="absolute z-10 saturate-0 brightness-30 opacity-60 bg-[image:var(--bg-abstractService)] bg-no-repeat bg-cover bg-[center] w-full h-full "></div>
                    <div className="absolute z-20 opacity-60 bg-[image:var(--bg-hero1)] w-full h-full"></div>
                    <p className="mt-[120px] mb-[50px] px-[19px] py-[16px] flex items-center justify-center bg-green50 rounded-[8px] z-30"><BoxLogo width={40} height={44} /></p>
                    <h2 className=" mb-10 text-[28px] lg:text-[48px] text-center font-semibold z-10">Thank you for your Interest in SquareUp.</h2>
                    <p className="mb-[50px] w-5/6 text-center text-lg z-10">We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us.</p>
                    <Btn className="mb-[50px] lg:mb-[100px] 2xl:mb-[120px] z-50" title="Contact Us" link="/contact" />
                </div>
                <FormMain />
            </section>
        </main>
    )
}

export default Process