import Image from "next/image"
import Link from "next/link"
import { FC } from "react"


interface CareersCardProps {
    title: string
    description: string
    className?: string
}

const CareersCard:FC<CareersCardProps> = ({title, description, className}) => {
    return (
        <li className={`flex flex-col gap-y-5 p-[40px] xl:px-[50px] xl:py-[100px] w-full xl:w-1/2 border border-grey20 ${className}`}>
            <h3 className="mb-5 pb-5 text-2xl font-semibold text-green80 border-b border-grey20">{title}</h3>
            <p className="flex-1 mb-5">{description}</p>
        </li>
    )
}

export default CareersCard