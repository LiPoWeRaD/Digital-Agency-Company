

import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface ServicesCardProps {
    img: string;
    title: string;
    description: string;
    link: string;
    titleRow?: boolean
    btn?: boolean
    className?: string
}

const ServicesCard:FC<ServicesCardProps> = ({img, title, description, link, titleRow = false, btn = true, className}) => {
    return (
        <li className={`flex p-[50px] flex-col w-full lg:w-1/2 border border-grey20 ${className}`}>
            {titleRow ? (
                <div className="flex items-center gap-x-5 mb-[40px]">
                    <Image src={img} alt={title} width={100} height={100} />
                    <h3 className="text-2xl font-semibold">{title}</h3>
                </div>
            ) : (
                <>
                    <Image className="mb-[40px] rounded-[8px]" src={img} alt={title} width={88} height={88} />
                    <h3 className="mb-[20px] text-2xl font-semibold">{title}</h3>
                </>
            )
            }
            <p className="flex-1 mb-5">{description}</p>
            {btn && (
                <Link href={link} className="px-6 py-4 text-center rounded-[8px] cursor-pointer bg-grey20">Learn More</Link>
            )}
        </li>
    )
}

export default ServicesCard