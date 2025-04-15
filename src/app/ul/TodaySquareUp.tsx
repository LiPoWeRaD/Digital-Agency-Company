import Image from "next/image"
import { FC } from "react"
import Btn from "./btn"


interface Props {
    title: string
    description: string
    welcome: string
    link: string
}

const TodaySquareUp:FC<Props> = ({title, description, welcome, link}) => {
    return (
        <div className="flex p-5 xl:p-[80px] flex-col gap-[50px]">
            <div className="flex flex-col xl:flex-row gap-10 items-center">
                <Image className="w-fit rounded-2xl" src="images/box2.jpg" alt={title} width={100} height={100} />
                <div className="flex flex-col">
                    <h3 className="mb-[30px] text-3xl text-center xl:text-left font-semibold">{title}</h3>
                    <p className="flex-1 text-center xl:text-left">{description}</p>
                </div>
            </div>
            <div className="flex p-5 xl:px-10 py-6 flex-col xl:flex-row items-center gap-10 border border-grey20 rounded-2xl">
                <p>Welcome to SquareUp</p>
                <p className="flex-1 px-5 py-3.5 bg-grey20 rounded-2xl">{welcome}</p>
                <Btn className="w-full xl:w-fit text-center" title="Start Project" link={link} />
            </div>
        </div>
    )
}

export default TodaySquareUp