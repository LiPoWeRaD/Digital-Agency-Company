import CareersCard from "../ul/CareersCard"
import DesignCareers from "../ul/DesignCareers"
import TodaySquareUp from "../ul/TodaySquareUp"


const Careers = () => {
    return (
        <main className="bg-grey15">
            <section className="container mx-auto bg-grey15">
                <div className="relative z-20 flex flex-col items-center bg-[#ACFF2433]">
                    <div className="absolute z-10 saturate-0 brightness-30 opacity-60 bg-[image:var(--bg-abstractService)] bg-no-repeat bg-cover bg-[center] w-full h-full "></div>
                    <div className="absolute z-20 opacity-60 bg-[image:var(--bg-hero1)] w-full h-full"></div>
                    <h2 className="mt-10 lg:mt-[100px] mb-10 text-[28px] lg:text-[48px] text-center font-semibold z-10">Join Our Team at SquareUp</h2>
                    <p className="mb-[120px] sm:w-5/6 text-center text-lg z-10">Unlock your potential and join our team of innovators and problem solvers.</p>
                </div>
            </section>
            <section className="container mx-auto border border-grey20">
                <div className="mx-[20px] sm:mx-[50px] mb-[50px] grid grid-cols-1">
                    <h2 className="mt-[20px] md:mt-[120px] mb-10 text-[28px] md:text-[48px] font-semibold">Welcome to SquareUp, where talent meets opportunity!</h2>
                    <p className="mb-[50px] text-lg sm:w-4/5">{`At SquareUp, we believe that the success of our agency lies in the talent, passion, and dedication of our team members. 
                        We are a digital product agency that thrives on innovation, creativity, and collaboration. 
                        If you're ready to make a difference and contribute to cutting-edge projects, we invite you to explore career opportunities with us.`}</p>
                    <p className="px-4 py-2 md:px-6 md:py-4 rounded-[8px] sm:w-fit bg-grey1 border border-grey20">Why Work at SquareUp?:</p>
                </div>
            </section>
            <section className="container mx-auto bg-grey15">
                <ul className="container mx-auto flex flex-col xl:flex-row flex-wrap">
                    <CareersCard 
                        title="Innovative and Impactful Projects" 
                        description="At SquareUp, you'll have the opportunity to work on exciting and impactful projects that shape the digital landscape. 
                            From designing intuitive user interfaces to developing robust software solutions, you'll be part of a team that creates products that make a difference." 
                    />
                    <CareersCard 
                        title="Supportive Environment" 
                        description="At SquareUp, you'll have the opportunity to work on exciting and impactful projects that shape the digital landscape. 
                            From designing intuitive user interfaces to developing robust software solutions, you'll be part of a team that creates products that make a difference." 
                    />
                    <CareersCard 
                        title="Continuous Learning and Growth" 
                        description="We believe in investing in our team's growth and development. We provide opportunities for continuous learning, whether it's through workshops, training programs, or attending industry conferences. 
                            At SquareUp, you'll have the chance to expand your skill set and stay up-to-date with the latest trends and technologies." 
                    />
                    <CareersCard 
                        title="Challenging and Rewarding Work" 
                        description="Our projects are challenging, but the rewards are even greater. 
                            We tackle complex problems and push ourselves to deliver innovative solutions. You'll be empowered to take ownership of your work, make a real impact, and see your ideas come to life." 
                    />
                </ul>
            </section>
            <section className="container mx-auto bg-grey15">
                <div className="flex px-[40px] xl:px-[50px] flex-col border border-grey20">
                    <h2 className="mt-[20px] md:mt-[120px] mb-10 text-[28px] md:text-[48px] font-semibold">Current Openings</h2>
                    <p className="mb-[50px] text-lg">{`We are always on the lookout for talented individuals who are passionate about creating exceptional digital experiences. 
                        Whether you're a designer, engineer, project manager, or have skills that align with our agency's mission, we encourage you to explore our open positions.`}</p>
                </div>
                <DesignCareers 
                    title="Design Job Openingsr" 
                    img1="/images/Careers/UI.png" 
                    img2="/images/Careers/UX.png" 
                    img3="/images/Careers/Design.png" 
                    name1="UI Designer"
                    name2="UX Designer"
                    name3="Design Head"
                    description1="Bring your creativity and expertise to our team as a UI Designer. 
                        Collaborate with cross-functional teams to design visually stunning and user-friendly interfaces. Utilize your skills in layout design, typography, 
                        and color theory to create engaging digital experiences that leave a lasting impression."

                    description2="Join us as a UX Designer and help shape exceptional user experiences. Conduct user research, analyze data, and create wireframes and prototypes 
                        to design intuitive and user-centric interfaces. 
                        Collaborate closely with UI Designers, developers, and stakeholders to ensure seamless and enjoyable user journeys."

                    description3="Lead our design team as a Design Head and drive the creative vision of our products. Provide strategic direction, mentorship, and guidance to UI and UX designers. 
                        Collaborate with cross-functional teams to ensure design consistency and elevate our brand identity through innovative and visually impactful designs."
                />
                <DesignCareers 
                    title="Development Job Openings" 
                    img1="/images/Careers/Front.png" 
                    img2="/images/Careers/Back.png" 
                    img3="/images/Careers/Full.png" 
                    name1="Front - End Developer"
                    name2="Back - End Developer"
                    name3="Full Stack Developer"
                    description1="Join our team as a Front-End Developer and bring our designs to life. Transform UI/UX wireframes into interactive web interfaces using HTML, CSS, and JavaScript. 
                        Collaborate closely with designers and back-end developers to ensure seamless integration and optimal user experiences."

                    description2="Be part of our team as a Backend Developer and contribute to building robust and scalable web applications. 
                        Develop server-side logic, integrate databases, and optimize system performance. Collaborate with front-end developers to ensure smooth communication between the server and the user interface."

                    description3="Join us as a Full Stack Developer and take on end-to-end responsibility for web application development. 
                        Combine your skills in both front-end and back-end technologies to create dynamic and responsive websites. 
                        Collaborate with designers, developers, and stakeholders to deliver comprehensive and user-friendly solutions."
                />
                <DesignCareers 
                    title="Management Job Openings" 
                    img1="/images/Careers/BA.png" 
                    img2="/images/Careers/Project.png" 
                    img3="/images/Careers/HR.png" 
                    name1="BA Manager"
                    name2="Project Manager"
                    name3="HR Manager"
                    description1="Lead our business analysis team as a BA Manager and drive strategic initiatives. Gather and analyze requirements, 
                        facilitate communication between stakeholders, and ensure project alignment with business objectives. 
                        Provide leadership and mentorship to a team of talented business analysts."

                    description2="Join our team as a Project Manager and oversee the successful delivery of projects from initiation to completion. 
                        Define project scope, manage timelines and resources, and ensure effective communication across cross-functional teams. 
                        Utilize your leadership and organizational skills to drive project success."

                    description3="Be part of our team as an HR Manager and play a vital role in managing our human resources. Lead talent acquisition, employee engagement, and performance management initiatives. 
                        Collaborate with leadership to develop and implement HR strategies that foster a positive and inclusive work culture."
                />
                <DesignCareers 
                    title="QA Job Openings" 
                    img1="/images/Careers/QA.png" 
                    img2="/images/Careers/SQL.png" 
                    img3="/images/Careers/Manual.png" 
                    name1="QA Tester"
                    name2="SQL Tester"
                    name3="Manual Tester"
                    description1="Ensure the quality of our software products as a QA Tester. Develop test plans, execute test cases, and identify and report software defects. 
                        Collaborate with developers and stakeholders to ensure that our products meet high-quality standards and deliver an exceptional user experience."

                    description2="Join us as an SQL Tester and play a key role in testing and validating the integrity of our databases. Write complex SQL queries to perform data validation and identify any anomalies. 
                        Collaborate with developers and QA testers to ensure the accuracy and reliability of our data."

                    description3="Be part of our team as a Manual Tester and perform comprehensive manual testing to ensure the quality and functionality of our software applications. Develop test cases, execute test scripts, and document test results. 
                        Collaborate with developers and QA testers to troubleshoot issues and enhance software performance."
                />
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
    )
}

export default Careers