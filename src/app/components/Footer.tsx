import Link from "next/link";
import Logo from "../ul/Logo";
import Image from "next/image";
import Email from "../svg/email";
import Phone from "../svg/phone";
import Location from "../svg/location";


const Footer = () => {
    return (
        <footer className="bg-grey1 py-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col xl:flex-row pb-[50px] items-center justify-between gap-6 border-b border-grey20">
                    <Logo />
                    <nav>
                        <ul className="flex flex-wrap justify-center items-center gap-4">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/services">Services</Link></li>
                            <li><Link href="/work">Work</Link></li>
                            <li><Link href="/process">Process</Link></li>
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/careers">Careers</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </nav>
                    <div className="flex flex-col xl:flex-row p-3.5 border border-grey20 items-center gap-5 rounded-[8px]">
                        <p>Stay Connected</p>
                        <ul className="flex items-center gap-x-4">
                            <li><Link href="/"><Image src="images/facebook.png" alt="facebook" width={64} height={64} /></Link></li>
                            <li><Link href="/"><Image src="images/twiter.png" alt="twitter" width={64} height={64} /></Link></li>
                            <li><Link href="/"><Image src="images/in.png" alt="in" width={64} height={64} /></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col xl:flex-row mt-[50px] gap-y-4 items-center justify-between">
                    <ul className="flex flex-col xl:flex-row items-center gap-4">
                        <li><Link className="flex pb-[17px] gap-2.5 border-b border-grey20" type="email" href="#"><Email /><span>hello@squareup.com</span></Link></li>
                        <li><Link className="flex pb-[17px] gap-2.5 border-b border-grey20" type="tel" href="#"><Phone /><span>+91 91813 23 2309</span></Link></li>
                        <li><Link className="flex pb-[17px] gap-2.5 border-b border-grey20" type="location" href="#"><Location /><span>Somewhere in the World</span></Link></li>
                    </ul>
                    <p>© 2023 SquareUp. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;