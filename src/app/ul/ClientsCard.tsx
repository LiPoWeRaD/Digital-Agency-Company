import Image from "next/image"
import Link from "next/link"
import { FC } from "react"


interface ClientsCardProps {
    title: string
    description: string
    name: string
    position: string
    img: string
    link: string
    className?: string
}

const ClientsCard:FC<ClientsCardProps> = ({title, description, name, position, img, link, className}) => {
    return (
        <li className={`flex flex-col gap-y-5 p-[40px] xl:px-[80px] xl:py-[100px] w-full xl:w-1/2 border border-grey20 ${className}`}>
            <h3 className="mb-[20px] text-2xl font-semibold text-green80">{title}</h3>
            <p className="flex-1 mb-5">{description}</p>
            <div className="flex p-5 items-center gap-x-5 rounded-2xl border border-grey20">
                <Image className="rounded-2xl" src={img} alt={name} width={60} height={60} />
                <div className="flex-1">
                    <h4 className="mb-2 text-xl font-semibold">{name}</h4>
                    <p>{position}</p>
                </div>
                <Link href={link} className="hidden xl:block px-6 py-4 text-center rounded-[8px] cursor-pointer bg-grey20">Open Website</Link>
            </div>
        </li>
    )
}

export default ClientsCard