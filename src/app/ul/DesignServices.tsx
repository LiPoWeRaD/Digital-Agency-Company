import Image from "next/image";
import { FC } from "react";


interface Props {
    title: string;
    img1: string;
    img2: string;
    img3: string;
    img4: string;
    description1: string;
    description2: string;
    description3: string;
    description4: string;
}

const DesignServices:FC<Props> = ({title, img1, img2, img3, img4, description1, description2, description3, description4}) => {

  return (
    <>
        <h3 className="my-[50px] ml-[50px] text-[20px] md:text-[28px] font-semibold">{title}</h3>
        <ul className="grid grid-cols-2 lg:grid-cols-4">
            <li className="flex p-5 md:p-[50px] flex-col gap-y-2 border border-grey20">
                <Image className="hidden md:block mb-[30px] w-fit" src={img1} alt={title} width={100} height={100} />
                <Image className="md:hidden mb-[30px] w-fit" src={img1} alt={title} width={56} height={56} />
                <p className="text-sm lg:text-xl">{description1}</p>
            </li>
            <li className="flex p-5 md:p-[50px] flex-col gap-y-2 border border-grey20">
                <Image className="hidden md:block mb-[30px] w-fit" src={img2} alt={title} width={100} height={100} />
                <Image className="md:hidden mb-[30px] w-fit" src={img2} alt={title} width={56} height={56} />
                <p className="text-sm lg:text-xl">{description2}</p>
            </li>
            <li className="flex p-5 md:p-[50px] flex-col gap-y-2 border border-grey20">
                <Image className="hidden md:block mb-[30px] w-fit" src={img3} alt={title} width={100} height={100} />
                <Image className="md:hidden mb-[30px] w-fit" src={img3} alt={title} width={56} height={56} />
                <p className="text-sm lg:text-xl">{description3}</p>
            </li>
            <li className="flex p-5 md:p-[50px] flex-col gap-y-2 border border-grey20">
                <Image className="hidden md:block mb-[30px] w-fit" src={img4} alt={title} width={100} height={100} />
                <Image className="md:hidden mb-[30px] w-fit" src={img4} alt={title} width={56} height={56} />
                <p className="text-sm lg:text-xl">{description4}</p>
            </li>
        </ul>
    </>
  )
};

export default DesignServices