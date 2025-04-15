"use client"

import Link from "next/link";
import Logo from "../ul/Logo";
import Btn from "../ul/btn";
import { useState } from "react";
import Menu from "../svg/menu";
import { usePathname } from "next/navigation";


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const path = usePathname()

    return (
        <header className="bg-grey10">
            <div className="container mx-auto py-5 px-4 flex items-center justify-between">
                <Logo />
                
                {/* Бургер-иконка (показывается только на мобильных) */}
                <div 
                    className="lg:hidden focus:outline-none"
                    onClick={toggleMenu}
                >
                    <div className="w-6 flex flex-col gap-1.5 mr-5">
                        <button type="button" className="flex p-2 justify-center items-center w-[46px] h-[46px] bg-grey20 rounded-2xl cursor-pointer"><Menu /></button>
                    </div>
                </div>

                {/* Десктопное меню (скрывается на мобильных) */}
                <nav className="hidden lg:block">
                    <ul className="flex items-center">
                        <li className={`px-6 py-3 ${path === '/' ? 'bg-grey20 rounded-md' : ''}`}><Link href="/">Home</Link></li>
                        <li className={`px-6 py-3 ${path === '/services' ? 'bg-grey20 rounded-md' : ''}`}><Link href="/services">Services</Link></li>
                        <li className={`px-6 py-3 ${path === '/work' ? 'bg-grey20 rounded-md' : ''}`}><Link href="/work">Work</Link></li>
                        <li className={`px-6 py-3 ${path === '/process' ? 'bg-grey20 rounded-md' : ''}`}><Link href="/process">Process</Link></li>
                        <li className={`px-6 py-3 ${path === '/about' ? 'bg-grey20 rounded-md' : ''}`}><Link href="/about">About</Link></li>
                        <li className={`px-6 py-3 ${path === '/careers' ? 'bg-grey20 rounded-md' : ''}`}><Link href="/careers">Careers</Link></li>
                    </ul>
                </nav>

                {/* Кнопка Contact Us (скрывается на мобильных) */}
                <div className="hidden lg:block">
                    <Btn title="Contact Us" link="/contact" />
                </div>

                {/* Мобильное меню (появляется по клику на бургер) */}
                {isMenuOpen && (
                    <div className="lg:hidden absolute top-20 right-0 bg-grey10 z-50 py-4 px-4 shadow-lg">
                        <ul className="flex flex-col items-center gap-y-3">
                            <li className={`px-6 py-3 ${path === '/' ? 'bg-grey20 rounded-md' : ''}`}><Link href="/" onClick={toggleMenu}>Home</Link></li>
                            <li className={`px-6 py-3 ${path === '/services' ? 'bg-grey20 rounded-md' : ''}`}><Link href="/services" onClick={toggleMenu}>Services</Link></li>
                            <li className={`px-6 py-3 ${path === '/work' ? 'bg-grey20 rounded-md' : ''}`}><Link href="/work" onClick={toggleMenu}>Work</Link></li>
                            <li className={`px-6 py-3 ${path === '/process' ? 'bg-grey20 rounded-md' : ''}`}><Link href="/Process" onClick={toggleMenu}>Contact</Link></li>
                            <li className={`px-6 py-3 ${path === '/about' ? 'bg-grey20 rounded-md' : ''}`}><Link href="/about" onClick={toggleMenu}>About</Link></li>
                            <li className={`px-6 py-3 ${path === '/careers' ? 'bg-grey20 rounded-md' : ''}`}><Link href="/careers" onClick={toggleMenu}>Careers</Link></li>
                            <li className="mt-2">
                                <Btn title="Contact Us" link="/contact" />
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;