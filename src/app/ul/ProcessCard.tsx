import { FC } from "react";
import ProcessCardProps from "../type/ProcessCardProps";


const ProcessCard:FC<ProcessCardProps> = ({title, description, number}) => {
    return (
        <li className="flex flex-col px-[20px] sm:px-[50px] py-6 lg:px-10 lg:py-20 2xl:px-[100px] 2xl:py-[80px] border border-grey20">
            <div className="flex mb-5 items-center gap-3.5">
                <h3 className="text-[80px] block lg:text-[120px] leading-none 2xl:text-[150px] font-semibold text-green80">{number}</h3>
                <p className="mt-3 pb-3 2xl:mt-5 2xl:pb-5 text-[20px] lg:text-[24px] 2xl:text-[30px] w-full border-b border-grey20">{title}</p>
            </div>
            <p className="text-[14px] lg:text-[16px] 2xl:text-[18px]">{description}</p>
        </li>
    );
};

export default ProcessCard;