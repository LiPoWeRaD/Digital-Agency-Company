import BoxLogo from "../svg/boxLogo"
import Btn from "../ul/btn"
import SquareUp from "../ul/SquareUp"


const Work = () => {
    return (
        <main className="bg-grey15">
            <section className="container mx-auto bg-grey15">
                <div className="relative z-20 flex flex-col items-center bg-[#ACFF2433]">
                    <div className="absolute z-10 saturate-0 brightness-30 opacity-60 bg-[image:var(--bg-abstractService)] bg-no-repeat bg-cover bg-[center] w-full h-full "></div>
                    <div className="absolute z-20 opacity-60 bg-[image:var(--bg-hero1)] w-full h-full"></div>
                    <h2 className="mt-10 lg:mt-[100px] mb-10 text-[28px] lg:text-[48px] text-center font-semibold z-10">Our Works</h2>
                    <p className="mb-[120px] sm:w-5/6 text-center text-lg z-10">Discover a portfolio of visually stunning and strategically crafted digital projects that showcase our creativity and expertise.</p>
                </div>
            </section>
            <section className="container mx-auto border border-grey20">
                <div className="mx-[20px] sm:mx-[50px] mb-[50px] grid grid-cols-1">
                    <h2 className="mt-[20px] md:mt-[120px] mb-10 text-[28px] md:text-[48px] font-semibold">At SquareUp</h2>
                    <p className="mb-[50px] text-lg sm:w-4/5">We have had the privilege of working with a diverse range of clients and delivering exceptional digital products that drive success.</p>
                    <Btn className="sm:w-fit" title="Here are ten examples of our notable works:" bgColor={false} />
                </div>
                <ul className="grid grid-cols-1 lg:grid-cols-2 pt-[30px]">
                    <SquareUp 
                        title="E-Commerce Platform for Fashion Hub" 
                        classImg="bg-[image:var(--bg-SquareUp1)]" 
                        name="Chic Boutique" 
                        link="htttps:/www.chicboutique.com" 
                        description="We developed a visually stunning and user-friendly e-commerce platform for Chic Boutique, 
                            a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration, 
                            and personalized recommendations, resulting in increased online sales and customer satisfaction." 
                    />
                    <SquareUp 
                        title="Mobile App for Food Delivery Service" 
                        classImg="bg-[image:var(--bg-SquareUp2)]" 
                        name="HungryBites" 
                        link="htttps:/www.hungrybites.com" 
                        description="HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, 
                        and secure payment options, resulting in improved customer convenience and operational efficiency." 
                    />
                    <SquareUp 
                        title="Booking and Reservation System for Event Management" 
                        classImg="bg-[image:var(--bg-SquareUp3)]" 
                        name="EventMasters" 
                        link="htttps:/www.eventmasters.com" 
                        description="EventMasters required a comprehensive booking and reservation system for their event management services. 
                            We designed a user-friendly platform that allowed seamless event registration, ticketing, and attendee management, resulting in streamlined processes and enhanced customer experiences." 
                    />
                    <SquareUp 
                        title="Custom Software for Workflow Automation" 
                        classImg="bg-[image:var(--bg-SquareUp4)]" 
                        name="ProTech Solutions" 
                        link="htttps:/www.protechsolutions.com" 
                        description="HungryBites approached us to create a mobile app that streamlined their food delivery service. 
                            The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency." 
                    />
                    <SquareUp 
                        title="Web Portal for Real Estate Listings" 
                        classImg="bg-[image:var(--bg-SquareUp5)]" 
                        name="Dream Homes Realty"
                        className="hidden lg:block" 
                        link="htttps:/www.dreamhomesrealty.com" 
                        description="Dream Homes Realty wanted an intuitive web portal for showcasing their property listings. 
                            We created a visually appealing platform with advanced search filters, virtual tours, and a user-friendly interface, enabling potential buyers to find their dream homes easily." 
                    />
                    <SquareUp 
                        title="Mobile App for Fitness Tracking" 
                        classImg="bg-[image:var(--bg-SquareUp6)]" 
                        name="FitLife Tracker"
                        className="hidden lg:block" 
                        link="htttps:/www.fitlifetracker.com" 
                        description="FitLife Tracker approached us to develop a mobile app that tracked fitness activities and provided personalized workout plans. 
                            The app included features such as activity tracking, progress monitoring, and social sharing, empowering users to lead healthier lifestyles." 
                    />
                    <SquareUp 
                        title="Custom Software for Supply Chain Management" 
                        classImg="bg-[image:var(--bg-SquareUp7)]" 
                        name="Global Logistics Solutions"
                        className="hidden lg:block" 
                        link="htttps:/www.globallogisticssolutions.com" 
                        description="Global Logistics Solutions required a custom software solution to streamline their supply chain operations. 
                            We developed a scalable system that optimized inventory management, automated order processing, and enhanced logistics tracking, resulting in improved efficiency and reduced costs." 
                    />
                    <SquareUp 
                        title="Educational Platform for Online Learning" 
                        classImg="bg-[image:var(--bg-SquareUp8)]" 
                        name="EduConnect"
                        className="hidden lg:block" 
                        link="htttps:/www.educonnect.com" 
                        description="EduConnect sought an educational platform to facilitate online learning. 
                            We developed an interactive platform with virtual classrooms, multimedia content, and student progress tracking, providing a seamless and engaging learning experience for students of all ages." 
                    />
                    <SquareUp 
                        title="Mobile App for Travel Planning" 
                        classImg="bg-[image:var(--bg-SquareUp9)]" 
                        name="WanderWise"
                        className="hidden lg:block" 
                        link="htttps:/www.wanderwise.com" 
                        description="WanderWise wanted a mobile app that simplified travel planning and discovery. 
                            We developed an app with features like personalized itineraries, destination guides, and integrated booking options, making it easier for travelers to explore new destinations." 
                    />
                    <SquareUp 
                        title="Web Application for Customer Relationship Management" 
                        classImg="bg-[image:var(--bg-SquareUp10)]" 
                        name="ConnectCRM"
                        className="hidden lg:block" 
                        link="htttps:/www.connectcrm.com" 
                        description="ConnectCRM needed a web application to manage their customer relationships effectively. 
                            We developed a feature-rich CRM platform with lead management, communication tracking, and data analytics, enabling businesses to nurture customer relationships and drive growth." 
                    />
                </ul>
            </section>
            <section className="container mx-auto bg-grey15">
                <div className="relative z-20 flex flex-col items-center bg-[#ACFF2433]">
                    <div className="absolute z-10 saturate-0 brightness-30 opacity-60 bg-[image:var(--bg-abstractService)] bg-no-repeat bg-cover bg-[center] w-full h-full "></div>
                    <div className="absolute z-20 opacity-60 bg-[image:var(--bg-hero1)] w-full h-full"></div>
                    <p className="mt-[20px] md:mt-[120px] mb-[50px] px-[19px] py-[16px] flex items-center justify-center bg-green50 rounded-[8px] z-30"><BoxLogo width={40} height={44} /></p>
                    <h2 className="mx-[20px] mb-10 text-[28px] lg:text-[48px] text-center font-semibold z-10">Let us Bring your Ideas to Life in the Digital World.</h2>
                    <p className="mb-[120px] mx-[20px] sm:w-5/6 text-center text-lg z-10">No matter which services you choose, we are committed to delivering exceptional results that exceed your expectations. 
                        Our multidisciplinary team works closely together to ensure seamless collaboration and a unified vision for your digital product.</p>
                    <Btn className="mb-[50px] lg:mb-[100px] xl:mb-[120px] w-fit z-20" title="Start Project" link="/" />
                </div>
            </section>
        </main>
    )
}

export default Work