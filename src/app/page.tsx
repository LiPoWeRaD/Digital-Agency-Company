"use client";


import Btn from "./ul/btn";
import Fors from "./ul/Fors";
import Image from "next/image";
import ServicesCard from "./ul/ServicesCard";
import ClientsCard from "./ul/ClientsCard";
import Askeds from "./components/Askeds";
import BoxLogo from "./svg/boxLogo";
import FormMain from "./components/formMain";

interface AgentsProps {
  name: string
  img: string
}


export default function Home() {

  const companies: AgentsProps[] = [
    {name: "zapier", img: "images/zapier.png"},
    {name: "spotify", img: "images/spotify.png"},
    {name: "zoom", img: "images/zoom.png"},
    {name: "slack", img: "images/slack.png"},
    {name: "amazon", img: "images/amazon.png"},
    {name: "adobe", img: "images/adobe.png"},
  ];
  
  return (
    <main className="bg-grey15">
      <section className="relative lg:container mx-auto pb-[40px]  flex flex-col items-center bg-grey1">
        <div className="absolute bg-[image:var(--bg-abstractDesign)] bg-bottom bg-no-repeat bg-contain w-full h-full"></div>
        <div className="absolute bg-[image:var(--bg-hero1)] w-full h-full"></div>
        <h1 className="mb-10 mt-[115px] text-[34px] lg:text-[68px] text-center w-1/2 font-semibold z-10">A Digital Product Studio that will Work</h1>
        <p className="hidden lg:block relative mb-[50px] px-10 py-6 rounded-[12px] border border-grey20 bg-grey1 ">For <Fors name="Startups" />, <Fors name="Enterprise leaders" />, <Fors name="Media & Publishers" /> and <Fors name="Social Good" /></p>
        <p className="lg:hidden relative mb-[50px] px-10 py-6 text-[12px] rounded-[12px] border border-grey20 bg-grey1 ">For Startups, Enterprise leaders, Media & Publishers and Social Good</p>
        <div className="flex z-10 items-center gap-x-5">
          <Btn title="Our Works Us" bgColor={false} />
          <Btn title="Contact Us" link="/contact" />
        </div>
      </section> 
      <section className="container mx-auto relative lg:p-[40px] flex flex-col justify-between gap-y-10 border border-grey20">
        <p className="absolute -top-6 lg:-top-9 left-1/2 -translate-x-1/2 px-[24px] py-[10px] lg:px-[34px] lg:py-[20px] text-[12px] text-center whitespace-nowrap lg:text-lg bg-grey10 border border-grey20 rounded-full">Trusted By 250+ Companies</p>
        <div className="grid grid-cols-2 lg:flex lg:justify-between lg:items-center">
          {companies.map((company) => (
            <Image className="mx-auto px-10 py-[30px] w-full h-full border border-grey20 lg:border-0 lg:p-0 lg:w-auto lg:h-auto" key={company.name} src={company.img} alt={company.name} width={100} height={100} />
          ))}  
        </div> 
      </section>
      <section className="container mx-auto bg-grey15">
        <div className="relative z-20 flex flex-col items-center bg-[#ACFF2433]">
          <div className="absolute z-10 saturate-0 brightness-30 opacity-60 bg-[image:var(--bg-abstractService)] bg-no-repeat bg-cover bg-[center] w-full h-full "></div>
          <div className="absolute z-20 opacity-60 bg-[image:var(--bg-hero1)] w-full h-full"></div>
          <h2 className="mt-[120px] mb-10 text-[28px] lg:text-[48px] font-semibold z-10">Our Services</h2>
          <p className="mb-[120px] text-lg z-10 text-center">Transform your brand with our innovative digital solutions that captivate and engage your audience.</p>
        </div>
        <ul className="container mx-auto flex flex-col lg:flex-row ">
          <ServicesCard img="/ServicesDesign.png" title="Design" description="At Squareup, our design team is passionate about creating stunning, 
                        user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; 
                        it's about creating seamless and intuitive user experiences." link="#" />
          <ServicesCard img="/ServicesEngineering.png" title="Engineering" description="Our engineering team combines technical expertise 
                          with a passion for innovation to build robust and scalable digital solutions. 
                          We leverage the latest technologies and best practices to deliver 
                          high-performance applications tailored to your specific needs." link="#" />
          <ServicesCard img="/ServicesManagement.png" title="Project Management" description="Our experienced project management team ensures that your projects are delivered on time, within budget, 
                          and according to your specifications. 
                          We follow industry-standard methodologies and employ effective communication and collaboration 
                          tools to keep you informed throughout the development process." link="#" />
        </ul>
      </section>
      <section className="container mx-auto bg-grey15">
        <div className="relative z-20 flex flex-col items-center bg-[#ACFF2433]">
          <div className="absolute z-10 saturate-0 brightness-30 opacity-60 bg-[image:var(--bg-abstractService)] bg-no-repeat bg-cover bg-[center] w-full h-full "></div>
          <div className="absolute z-20 opacity-60 bg-[image:var(--bg-hero1)] w-full h-full"></div>
          <h2 className="mt-[120px] mb-10 text-[28px] lg:text-[48px] text-center font-semibold z-10">Why Choose SquareUp?</h2>
          <p className="mb-[120px] text-lg text-center z-10">Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results.</p>
        </div>
        <ul className="container mx-auto flex flex-col lg:flex-row flex-wrap">
          <ServicesCard className="w-1/2" img="/images/Expertise.png" title="Expertise" description="Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. 
                        We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions." link="#" titleRow={true} btn={false} />

          <ServicesCard className="w-1/2" img="/images/Approach.png" title="Client-Centric Approach" description="We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, 
                        and tailor our services to meet your specific requirements. Your success is our success." link="#" titleRow={true} btn={false} />

          <ServicesCard className="w-1/2" img="/images/Solutions.png" title="Results-Driven Solutions" description="Our primary focus is on delivering results. 
                        We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, 
                        and provide a competitive advantage." link="#" titleRow={true} btn={false} />

          <ServicesCard className="w-1/2" img="/images/Partnership.png" title="Collaborative Partnership" description="We value long-term relationships with our clients. 
                        We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive." link="#" titleRow={true} btn={false} />
        </ul>
      </section>
      <section className="container mx-auto bg-grey15">
        <div className="relative z-20 flex flex-col items-center bg-[#ACFF2433]">
          <div className="absolute z-10 saturate-0 brightness-30 opacity-60 bg-[image:var(--bg-abstractService)] bg-no-repeat bg-cover bg-[center] w-full h-full "></div>
          <div className="absolute z-20 opacity-60 bg-[image:var(--bg-hero1)] w-full h-full"></div>
          <h2 className="mt-[120px] mb-10 text-[28px] lg:text-[48px] text-center font-semibold z-10">What our Clients say About us</h2>
          <p className="mb-[120px] w-5/6 text-center text-lg z-10">{`At SquareUp, we take pride in delivering exceptional digital products and services that drive success for our clients. 
            Here's what some of our satisfied clients have to say about their experience working with us`}</p>
        </div>
        <ul className="container mx-auto flex flex-col xl:flex-row flex-wrap">
          <ClientsCard className="w-1/2" title="SquareUp has been Instrumental in Transforming our Online Presence." description="Their team's expertise in web development and design resulted in a 
                       visually stunning and user-friendly e-commerce platform. 
                       Our online sales have skyrocketed, and we couldn't be happier." name="John Smith" position="CEO of Chic Boutique" img="/images/JohnSmith.jpg" link="#" />

          <ClientsCard className="w-1/2" title="Working with SquareUp was a breeze." description="They understood our vision for a mobile app that streamlined our food delivery service. 
                      The app they delivered exceeded our expectations, and our customers love the seamless 
                      ordering experience. SquareUp is a trusted partner we highly recommend." name="Sarah Johnson" position="Founder of HungryBites." img="/images/SarahJohnson.jpg" link="#" />
          
          <ClientsCard className="w-1/2" title="SquareUp developed a comprehensive booking and reservation system for our event management company" description="Their attention to detail and commitment to delivering 
                       a user-friendly platform was evident throughout the project. 
                       The system has streamlined our operations and enhanced our clients' event experiences." name="Mark Thompson" position="CEO of EventMasters" img="/images/MarkThompson.jpg" link="#" />

          <ClientsCard className="w-1/2" title="ProTech Solutions turned to SquareUp to automate our workflow" description="They delivered an exceptional custom software solution. 
                       The system has significantly increased our productivity and reduced manual errors. 
                       SquareUp's expertise and professionalism have made them a trusted technology partner." name="Laura Adams" position="COO of ProTech Solutions." img="/images/LauraAdams.jpg" link="#" />

          <ClientsCard className="w-1/2" title="SquareUp designed and developed a captivating web portal for showcasing our real estate listings." description="The platform is visually appealing and easy to navigate, 
                       allowing potential buyers to find their dream homes effortlessly. 
                       SquareUp's expertise in the real estate industry is unmatched." name="Michael Anderson" position="Founder of Dream Homes Realty." img="/images/MichaelAnderson.jpg" link="#" />

          <ClientsCard className="w-1/2" title="FitLife Tracker wanted a mobile app that tracked fitness activities and provided personalized workout plans." description="SquareUp's team developed an intuitive and 
                       feature-rich app that has helped our users stay motivated and achieve their fitness goals. 
                       We highly recommend SquareUp for any health and fitness app development needs." name="Emily Turner" position="CEO of FitLife Tracker" img="/images/EmilyTurner.jpg" link="#" />
        </ul>
      </section>
      <section className="container mx-auto bg-grey15">
        <div className="relative z-20 flex flex-col items-center bg-[#ACFF2433]">
          <div className="absolute z-10 saturate-0 brightness-30 opacity-60 bg-[image:var(--bg-abstractService)] bg-no-repeat bg-cover bg-[center] w-full h-full "></div>
          <div className="absolute z-20 opacity-60 bg-[image:var(--bg-hero1)] w-full h-full"></div>
          <h2 className="mt-[120px] mb-10 text-[28px] lg:text-[48px] text-center font-semibold z-10">What our Clients say About us</h2>
          <p className="mb-[120px] w-5/6 text-center text-lg z-10">{`At SquareUp, we take pride in delivering exceptional digital products and services that drive success for our clients. 
            Here's what some of our satisfied clients have to say about their experience working with us`}</p>
        </div>
        <Askeds /> 
      </section>
      <section className="container mx-auto bg-grey15 border border-grey20">
        <div className="relative z-20 flex flex-col items-center bg-[#ACFF2433]">
          <div className="absolute z-10 saturate-0 brightness-30 opacity-60 bg-[image:var(--bg-abstractService)] bg-no-repeat bg-cover bg-[center] w-full h-full "></div>
          <div className="absolute z-20 opacity-60 bg-[image:var(--bg-hero1)] w-full h-full"></div>
          <p className="mt-[120px] mb-[50px] px-[19px] py-[16px] flex items-center justify-center bg-green50 rounded-[8px] z-30"><BoxLogo width={40} height={44} /></p>
          <h2 className=" mb-10 text-[28px] lg:text-[48px] text-center font-semibold z-10">Thank you for your Interest in SquareUp.</h2>
          <p className="mb-[120px] w-5/6 text-center text-lg z-10">We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us.</p>
        </div>
        <FormMain />
      </section>
    </main>
  );
}
