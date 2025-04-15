import Image from "next/image"
import Link from "next/link"
import { FC } from "react"

interface Props {
    title: string
    classImg: string
    name: string
    link: string
    description: string
    className?: string
}

const SquareUp:FC<Props> = ({title, classImg, name, link, description, className}) => {
    return (
        <li className={`w-full border border-grey20 ${className}`}>
            <h3 className="mb-[30px] px-[20px] sm:px-[50px] py-[30px] text-[26px] lg:text-[16px] xl:text-[20px] 2xl:text-[26px] border border-grey20">{title}</h3>
            <div className={`${classImg} mx-[20px] sm:mx-[50px] mb-[30px] bg-[50%] bg-[length:100%_100%] bg-no-repeat h-[188px] md:h-[348px] xl:h-[423px] rounded-[12px]`}></div>
            <div className="mx-[20px] sm:mx-[50px] flex mb-[30px] items-center justify-between">
                <div>
                    <h4 className="mb-2.5 text-[24px]">{name}</h4>
                    <Link href={link} className="px-3.5 py-2.5 text-center rounded-[8px] cursor-pointer bg-grey20">{link}</Link>
                </div>
                <Link href={link}><Image className="" src="images/arrow.png" alt={title} width={50} height={50} /></Link>
            </div>
            <p className="mb-[20px] sm:mb-[100px] mx-[20px] sm:mx-[50px] text-[18px]">{description}</p>

        </li>
    )
}

export default SquareUp