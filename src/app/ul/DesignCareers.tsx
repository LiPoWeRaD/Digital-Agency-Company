import Image from "next/image";
import { FC } from "react";
import Btn from "./btn";


interface Props {
    title: string;
    img1: string;
    img2: string;
    img3: string;
    name1: string;
    name2: string;
    name3: string;
    description1: string;
    description2: string;
    description3: string;
}

const DesignCareers:FC<Props> = ({title, img1, img2, img3, name1, name2, name3, description1, description2, description3}) => {

  return (
    <div className="border border-grey20">
        <h3 className="my-[50px] ml-[40px] xl:ml-[50px] text-[20px] md:text-[28px] font-semibold">{title}</h3>
        <ul className="grid grid-cols-1 lg:grid-cols-3">
            <li className="flex p-5 px-[30px] md:p-[50px] flex-col gap-y-2 border border-grey20">
                <Image className="hidden md:block mb-[30px] w-fit" src={img1} alt={title} width={100} height={100} />
                <Image className="md:hidden mb-[30px]" src={img1} alt={title} width={56} height={56} />
                <h4 className="mb-2.5 text-[24px]">{name1}</h4>
                <p className="flex-1 mb-[30px] text-sm lg:text-xl">{description1}</p>
                <Btn title="Apply Now" link="#" className="text-center bg-grey20" bgColor={false} />
            </li>
            <li className="flex p-5 px-[30px] md:p-[50px] flex-col gap-y-2 border border-grey20">
                <Image className="hidden md:block mb-[30px] w-fit" src={img2} alt={title} width={100} height={100} />
                <Image className="md:hidden mb-[30px]" src={img2} alt={title} width={56} height={56} />
                <h4 className="mb-2.5 text-[24px]">{name2}</h4>
                <p className="flex-1 mb-[30px] text-sm lg:text-xl">{description2}</p>
                <Btn title="Apply Now" link="#" className="text-center bg-grey20" bgColor={false} />
            </li>
            <li className="flex p-5 px-[30px] md:p-[50px] flex-col gap-y-2 border border-grey20">
                <Image className="hidden md:block mb-[30px] w-fit" src={img3} alt={title} width={100} height={100} />
                <Image className="md:hidden mb-[30px]" src={img3} alt={title} width={56} height={56} />
                <h4 className="mb-2.5 text-[24px]">{name3}</h4>
                <p className="flex-1 mb-[30px] text-sm lg:text-xl">{description3}</p>
                <Btn title="Apply Now" link="#" className="text-center bg-grey20" bgColor={false} />
            </li>
        </ul>
    </div>
  )
};

export default DesignCareers