import Image from "next/image";
import Line from "../svg/line";
import Line2 from "../svg/line2";
import ProcessCard from "../ul/ProcessCard";
import ProcessCardProps from "../type/ProcessCardProps";
import TodaySquareUp from "../ul/TodaySquareUp";


const About = () => {
    const processCardsList: ProcessCardProps[] = [
        {
            number: "01",
            title: "Design",
            description: `Once upon a time, in a world driven by technology, a group of talented designers came together with a shared vision. 
                They believed that design could shape the way people interacted with digital products. With their passion for aesthetics and usability, 
                they founded SquareUp Digital Product Agency's design department. Their mission was to create visually stunning and user-friendly interfaces that would leave a lasting impression.`
        },
        {
            number: "02",
            title: "Engineering",
            description: `Meanwhile, a team of brilliant engineers was busy crafting the backbone of digital innovation. With their expertise in coding and development, 
                they founded the engineering division of SquareUp. They believed that technology had the power to transform ideas into reality. 
                Their mission was to build robust, scalable, and cutting-edge digital solutions that would push the boundaries of what was possible.`
        },
        {
            number: "03",
            title: "Project Management",
            description: `In the midst of the creative and technical minds, a group of project managers emerged as the glue that held everything together. 
                They understood the importance of effective communication, organization, and efficient execution. 
                With their skills in planning and coordination, they founded SquareUp's project management team. Their mission was to ensure that every project ran smoothly, on time, and within budget.`
        },
        {
            number: "04",
            title: "Collaboration",
            description: `At SquareUp, these three departments came together to form a cohesive and collaborative unit. 
                They embraced the power of collaboration and recognized that their combined expertise would result in truly exceptional digital products. 
                They believed that by working closely with their clients, understanding their needs, and involving them in the creative process, they could deliver solutions that surpassed expectations.`
        },
        {
            number: "05",
            title: "Client-Centric Approach",
            description: `SquareUp's success was not solely measured by their technical prowess or design skills but by their unwavering commitment to their clients. They placed their clients at the center of everything they did. 
                They took the time to listen, understand their unique challenges, and tailor their services to meet their specific requirements. Their mission was to become trusted partners, guiding businesses on their digital journey.`
        },
        {
            number: "06",
            title: "Driving Success",
            description: `With each project, SquareUp's reputation grew. Their portfolio expanded to include a diverse range of industries and their impact was felt far and wide. 
                From startups to established enterprises, businesses sought out SquareUp for their expertise in creating digital products that delivered tangible results. 
                SquareUp's success was driven by their passion for innovation, their dedication to quality, and their commitment to helping their clients succeed in the digital world.`
        },
    ]

    return (
        <main className="bg-grey15">
            <section className="container mx-auto bg-grey15">
                <div className="relative z-20 flex flex-col items-center bg-[#ACFF2433]">
                    <div className="absolute z-10 saturate-0 brightness-30 opacity-60 bg-[image:var(--bg-abstractService)] bg-no-repeat bg-cover bg-[center] w-full h-full "></div>
                    <div className="absolute z-20 opacity-60 bg-[image:var(--bg-hero1)] w-full h-full"></div>
                    <h2 className="mt-10 lg:mt-[100px] mb-10 text-[28px] lg:text-[48px] text-center font-semibold z-10">About Us</h2>
                    <p className="mb-[120px] sm:w-5/6 text-center text-lg z-10">Welcome to SquareUp, where collaboration, expertise, and client-centricity intersect to shape the future of digital innovation.</p>
                </div>
            </section>
            <section className="container mx-auto bg-grey15">
                <div className="grid px-4 lg:px-[100px] lg:py-[80px] 2xl:px-[150px] 2xl:py-[100px] grid-cols-1 lg:grid-cols-2 border border-grey20">
                    <div>
                        <h2 className="mt-[20px] md:mt-[120px] mb-10 text-[28px] md:text-[38px] 2xl:text-[48px] font-semibold">About SquareUp</h2>
                        <p className="mb-[50px] text-[16px] 2xl:text-lg sm:w-4/5">SquareUp is a digital product agency that is passionate about crafting exceptional digital experiences. We specialize in design, engineering, and project management, 
                            helping businesses thrive in the digital landscape. At SquareUp, 
                            we follow a structured and collaborative process to ensure the successful delivery of exceptional digital products. 
                            Our process combines industry best practices, creative thinking, and a client-centric approach.</p>
                    </div>
                    <div className="relative flex justify-center items-center bg-[#ACFF2433] rounded-2xl h-[337px] md:h-[483px] 2xl:h-[571px]">
                        <div className="absolute z-10 saturate-0 brightness-30 opacity-60 bg-[image:var(--bg-abstractAbout)] bg-no-repeat bg-cover bg-[center] rounded-2xl w-full h-full "></div>
                        <div className="absolute z-20 opacity-60 bg-[image:var(--bg-hero1)] w-full h-full"></div>
                        <p className="absolute -translate-y-1/2 scale-y-[0.3] top-16 sm:top-auto sm:scale-y-[0.5] xl:scale-y-[0.6] 2xl:scale-y-[0.8] h-[239px] lg:h-[245px] 2xl:h-[319px] z-20"><Line /></p>
                        <p className="absolute translate-y-1/2 scale-y-[-0.3] bottom-16 sm:bottom-auto sm:scale-y-[-0.5] xl:scale-y-[-0.6] 2xl:scale-y-[-0.8] h-[239px] lg:h-[245px] 2xl:h-[319px] z-20"><Line /></p>
                        <p className="absolute translate-x-1/2 scale-x-[0.3] left-[25%] sm:left-auto sm:scale-x-[0.5] xl:scale-x-[0.6] 2xl:scale-x-[0.8] w-[169px] lg:w-[150px] 2xl:w-[319px] z-20"><Line2 /></p>
                        <p className="absolute -translate-x-1/2 scale-x-[-0.3] right-[25%] sm:right-auto sm:scale-x-[-0.5] xl:scale-x-[-0.6] 2xl:scale-x-[-0.8] w-[169px] lg:w-[150px] 2xl:w-[319px] z-20"><Line2 /></p>
                        <Image className="rounded-2xl z-30" src="/box2.jpg" alt="about" width={100} height={100} />
                    </div>
                </div>
            </section>
            <section className="container mx-auto border border-grey20">
                <div className="mx-[20px] sm:mx-[50px] md:mb-[50px] grid grid-cols-1">
                    <h2 className="mt-[20px] md:mt-[120px] mb-10 text-[28px] md:text-[48px] 2xl:text-[58px] font-semibold">Our Story</h2>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2">
                    {processCardsList.map((item, index) => (
                        <ProcessCard key={index} title={item.title} description={item.description} number={item.number} />
                    ))}
                </ul>
            </section>
            <section className="container mx-auto border border-grey20">
                <TodaySquareUp 
                    title="Today, SquareUp Continues to Thrive as a Leading Digital Product Agency....." 
                    description="Combining the power of design, engineering, and project management to create transformative digital experiences. 
                        They invite you to join them on their journey and discover how they can help bring your digital ideas to life." 
                    welcome="Where collaboration, Expertise, and Client-Centricity Intersect to Shape the Future of Digital Innovation." 
                    link="#" />
            </section>
        </main>
    );
}

export default About