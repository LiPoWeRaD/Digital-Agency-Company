import { FC } from "react"

interface BoxLogoProps {
    width?: number
    height?: number
    className?: string
}
const BoxLogo:FC<BoxLogoProps> = ({width = 40, height = 44, className }) => {
    return (
        <svg className={'flex items-center justify-center text-center ' + className} width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.98584 10.7123L20.1408 22L20.1408 43.5493L0.98584 32.6036L0.98584 10.7123Z" fill="#1A1A1A"/>
            <path className="flex items-center justify-center text-center" fillRule="evenodd" clipRule="evenodd" d="M21.8309 21.9849V40.6369L37.6056 31.6228V12.6891L21.8309 21.9849ZM39.2957 
            32.6036L20.1408 43.5493V22L0.98584 10.7123L20.1408 0.450684L39.2957 10.7123V32.6036ZM36.7195 11.2495L20.1408 2.36807L4.43399 10.7824L20.973 20.5287L36.7195 11.2495Z" fill="#1A1A1A"/>
        </svg>

    )
}

export default BoxLogo