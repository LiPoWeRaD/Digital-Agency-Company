"use client"


import Link from "next/link"
import Email from "../svg/email"
import Phone from "../svg/phone"
import Location from "../svg/location"
import FormMain from "../components/formMain"
import Image from "next/image"
import Askeds from "../components/Askeds"
import TodaySquareUp from "../ul/TodaySquareUp"


const Contact = () => {
    return (
        <main className="bg-grey15">
            <section className="container mx-auto bg-grey15">
                <div className="relative z-20 flex flex-col items-center bg-[#ACFF2433]">
                    <div className="absolute z-10 saturate-0 brightness-30 opacity-60 bg-[image:var(--bg-abstractService)] bg-no-repeat bg-cover bg-[center] w-full h-full "></div>
                    <div className="absolute z-20 opacity-60 bg-[image:var(--bg-hero1)] w-full h-full"></div>
                    <h2 className="mt-10 lg:mt-[100px] mb-10 text-[28px] lg:text-[48px] text-center font-semibold z-10">Contact Us</h2>
                    <p className="mb-[120px] sm:w-5/6 text-center text-lg z-10">Get in touch with us today and let us help you with any questions or inquiries you may have.</p>
                </div>
            </section>
            <section className="container mx-auto bg-grey15">
                <div className="py-[50px] border border-grey20">
                    <ul className="flex flex-col xl:flex-row justify-center items-center gap-4">
                        <li><Link className="flex px-6 py-[18px] gap-2.5 bg-grey20 rounded-xl" type="email" href="#"><Email /><span>hello@squareup.com</span></Link></li>
                        <li><Link className="flex px-6 py-[18px] gap-2.5 bg-grey20 rounded-xl" type="tel" href="#"><Phone /><span>+91 91813 23 2309</span></Link></li>
                        <li><Link className="flex px-6 py-[18px] gap-2.5 bg-grey20 rounded-xl" type="location" href="#"><Location /><span>Somewhere in the World</span></Link></li>
                    </ul>
                </div>
            </section>
            <section className="container mx-auto bg-grey15 border border-grey20">
                <FormMain />
            </section>
            <section className="container mx-auto bg-grey15">
                <div className="grid grid-cols-1 lg:grid-cols-2 border border-grey20">
                    <div className="flex lg:pr-[80px] py-[50px] justify-center lg:justify-end border border-grey20">
                        <p className="text-[22px]">Operating Days <span className="px-6 py-3 text-[20px] bg-grey20 rounded-[8px]">Monday to Friday</span></p>
                    </div>
                    <div className="flex lg:ml-[80px] flex-col lg:flex-row p-3.5 mx-auto lg:mx-0 my-auto border border-grey20 items-center w-full lg:w-fit lg:h-fit gap-5 rounded-[8px]">
                        <p>Stay Connected</p>
                        <ul className="flex items-center gap-x-4">
                            <li><Link href="/"><Image src="/images/facebook.png" alt="facebook" width={64} height={64} /></Link></li>
                            <li><Link href="/"><Image src="/images/twiter.png" alt="twitter" width={64} height={64} /></Link></li>
                            <li><Link href="/"><Image src="/images/in.png" alt="in" width={64} height={64} /></Link></li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="container mx-auto bg-grey15">
                <div className="relative z-20 flex flex-col items-center bg-[#ACFF2433]">
                    <div className="absolute z-10 saturate-0 brightness-30 opacity-60 bg-[image:var(--bg-abstractService)] bg-no-repeat bg-cover bg-[center] w-full h-full "></div>
                    <div className="absolute z-20 opacity-60 bg-[image:var(--bg-hero1)] w-full h-full"></div>
                    <h2 className="mt-[120px] mb-10 text-[28px] lg:text-[48px] text-center font-semibold z-10">Frequently Asked Questions</h2>
                    <p className="mb-[120px] w-5/6 text-center text-lg z-10">Still you have any questions? Contact our Team via hello@squareup.com</p>
                </div>
                <Askeds /> 
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

export default Contact