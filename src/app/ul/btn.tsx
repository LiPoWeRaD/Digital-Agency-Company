import { FC } from "react"

interface Props {
    title: string
    bgColor?: boolean
    link?: string
    className?: string
}

const Btn:FC<Props> = ({title, bgColor = true, link, className}) => {
   return (
       <>
            {link ? (
                <a href={link} className={`px-4 py-2 md:px-6 md:py-4 rounded-[8px] cursor-pointer ${className} ${bgColor ? "bg-green50 text-black" : "border border-grey20"} $`}>{title}</a>
            ) : (
                <button type="button" className={`px-4 py-2 md:px-6 md:py-4 rounded-[8px] cursor-pointer ${className} ${bgColor ? "bg-green50 text-black" : "bg-grey1 border border-grey20"}`}>{title}</button>
            )}
       </>
   )
}

export default Btn