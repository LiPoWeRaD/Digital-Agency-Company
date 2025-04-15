import { useState } from 'react';
import Checked from '../svg/checked';
import Slider from '../ul/slider';
import Btn from '../ul/btn';

const FormMain = () => {
  


  return (
    <div className='py-[20px] lg:mx-[80px] lg:py-[80px] border border-grey20'>
        <form  className="flex flex-col mx-auto max-w-4/5 gap-y-10">
            <div className="grid lg:grid-cols-2 gap-10">
                <label className='p-6 bg-grey20 rounded-lg shadow-lg' htmlFor="name">
                    <span className="text-grey80">Full Name</span>
                    <input
                        type="text"
                        id="Full Name"
                        name="Full Name"
                        placeholder='Type here'
                        className="w-full px-4 py-2 mt-2 text-grey80 bg-grey15 border border-grey20 rounded-lg"
                    />
                </label>
                <label className='p-6 bg-grey20 rounded-lg shadow-lg' htmlFor="email">
                    <span className="text-grey80">Email</span>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder='Type here'
                        className="w-full px-4 py-2 mt-2 text-grey80 bg-grey15 border border-grey20 rounded-lg"
                    />
                </label>
            </div>
            <div className="grid grid-cols-1 p-6 bg-grey20 rounded-lg shadow-lg">
                <h4 className="mt-8 mb-10 text-lg font-semibold">Why are you contacting us?</h4>
                <div className='grid lg:grid-cols-2 gap-6'>
                    <label className="flex items-center gap-x-2.5 whitespace-nowrap lg:w-1/2 relative">
                        <input
                            type="checkbox"
                            id="webDesign"
                            name="webDesign"
                            className="
                            appearance-none
                            w-5 h-5
                            bg-grey15
                            border border-grey20
                            rounded-lg
                            cursor-pointer
                            focus:outline-none
                            focus:ring-2 focus:ring-green-500
                            peer
                            "
                        />
                        <div className="
                            absolute left-0
                            w-5 h-5
                            flex items-center justify-center
                            pointer-events-none
                            opacity-0
                            peer-checked:opacity-100
                        ">
                            <Checked  />
                        </div>
                        <span className="text-grey80">Web Design</span>
                    </label>
                    <label className="flex items-center gap-x-2.5 whitespace-nowrap lg:w-1/2 relative">
                        <input
                            type="checkbox"
                            id="сollaboration"
                            name="сollaboration"
                            className="
                            appearance-none
                            w-5 h-5
                            bg-grey15
                            border border-grey20
                            rounded-lg
                            cursor-pointer
                            focus:outline-none
                            focus:ring-2 focus:ring-green-500
                            peer
                            "
                        />
                        <div className="
                            absolute left-0
                            w-5 h-5
                            flex items-center justify-center
                            pointer-events-none
                            opacity-0
                            peer-checked:opacity-100
                        ">
                            <Checked  />
                        </div>
                        <span className="text-grey80">Collaboration</span>
                    </label>
                    <label className="flex items-center gap-x-2.5 whitespace-nowrap lg:w-1/2 relative">
                        <input
                            type="checkbox"
                            id="mobileAppDesign"
                            name="Mobile App Design"
                            className="
                            appearance-none
                            w-5 h-5
                            bg-grey15
                            border border-grey20
                            rounded-lg
                            cursor-pointer
                            focus:outline-none
                            focus:ring-2 focus:ring-green-500
                            peer
                            "
                        />
                        <div className="
                            absolute left-0
                            w-5 h-5
                            flex items-center justify-center
                            pointer-events-none
                            opacity-0
                            peer-checked:opacity-100
                        ">
                            <Checked  />
                        </div>
                        <span className="text-grey80">Mobile App Design</span>
                    </label>
                    <label className="flex items-center gap-x-2.5 whitespace-nowrap lg:w-1/2 relative">
                        <input
                            type="checkbox"
                            id="others"
                            name="others"
                            className="
                            appearance-none
                            w-5 h-5
                            bg-grey15
                            border border-grey20
                            rounded-lg
                            cursor-pointer
                            focus:outline-none
                            focus:ring-2 focus:ring-green-500
                            peer
                            "
                        />
                        <div className="
                            absolute left-0
                            w-5 h-5
                            flex items-center justify-center
                            pointer-events-none
                            opacity-0
                            peer-checked:opacity-100
                        ">
                            <Checked  />
                        </div>
                        <span className="text-grey80">Others</span>
                    </label>
                </div>
            </div>
            <div className="grid grid-cols-1 p-10 bg-grey20 rounded-lg shadow-lg">
                <h4 className="mt-8 mb-10 text-lg font-semibold">Your Budget</h4>
                <p className="mb-[40px] text-grey80">Slide to indicate your budget range</p>
                {/* slider */}
                <div className="flex items-center">
                    <Slider />
                </div>
            </div>
            <div className="grid grid-cols-1 p-6 bg-grey20 rounded-lg shadow-lg">
                <h4 className="mt-8 mb-5 text-lg font-semibold">Your Message</h4>
                <textarea
                    id="message"
                    name="message"
                    placeholder='Type here'
                    rows={2}
                    required
                    defaultValue={""}
                    className="w-full px-4 py-2 mt-2 text-grey80 bg-grey15 border border-grey20 rounded-lg"
                />
            </div>
            <Btn className="mb-6 px-11 w-fit mx-auto" title="Submit" link="/" />
        </form>
    </div>
  );
}

export default FormMain