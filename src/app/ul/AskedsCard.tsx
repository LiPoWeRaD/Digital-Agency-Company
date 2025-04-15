import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { FC } from "react";
import Cross from "../svg/cross";
import Plus from "../svg/plus";
import Image from "next/image";

interface AskedsCardProps {
    number: string;
    question: string;
    answer: string;
}

const AskedsCard:FC<AskedsCardProps> = ({number, question, answer}) => {
    return (
        <li className="px-[50px] py-[34px] border border-grey20">
            <Disclosure>
                {({ open }) => (
                <div className="flex flex-col ">
                    <DisclosureButton className="flex justify-between items-center w-full">
                    <div className="flex items-center gap-4">
                        <div className="relative z-10">
                            <Image src="/images/panelNumber.png" alt="" width={100} height={100} />
                            <span className={`absolute top-0 left-0 w-full h-full flex items-center justify-center text-[28px] font-semibold ${open ? 'text-green80' : ''}`}>
                                {number}
                            </span>
                        </div>
                        <h3 className={`text-lg text-left font-semibold mt-2 ${open ? 'text-green80' : ''}`}>
                            {question}
                        </h3>
                    </div>
                    <span className="px-3.5 py-3 bg-grey15 rounded-[8px] ml-4 cursor-pointer">
                        {open ? <Cross /> : <Plus />}
                    </span>
                    </DisclosureButton>

                    <DisclosurePanel className="mt-4 ">
                    <p className="text-grey80">
                        {answer}
                    </p>
                    </DisclosurePanel>
                </div>
                )}
            </Disclosure>
        </li>
    );
}

export default AskedsCard