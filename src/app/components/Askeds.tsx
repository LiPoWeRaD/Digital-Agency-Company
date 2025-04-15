import AskedsCard from '../ul/AskedsCard';


const Askeds = () => {
    return (
        <ul className="grid lg:grid-cols-2 w-full">
            <div className="col-start-1">
                <AskedsCard number="01" question="What services does SquareUp provide?" answer="SquareUp offers a range of services including design, engineering, and project management. 
                    We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more." />

                <AskedsCard number="02" question="How can SquareUp help my business?" answer="SquareUp can help your business with a wide range of services, including user experience design,
                    web development, mobile app development, custom software development, branding and identity, and more. We work with a variety of clients, from startups to 
                    established businesses, and we are committed to delivering high-quality work that meets your specific needs." />

                <AskedsCard number="03" question="What industries does SquareUp work with?" answer="SquareUp works with a wide range of industries, including technology,
                    healthcare, finance, education, and more. We work with clients from all over the world, and we are committed to delivering high-quality work that meets 
                    your specific needs." />

                <AskedsCard number="04" question="How long does it take to complete a project with SquareUp?" answer="The time it takes to complete a project with SquareUp depends on the
                    complexity of the project and the scope of the work. We work with a variety of clients, from startups to established businesses, and we are committed to 
                    delivering high-quality work that meets your specific needs." />
            </div>
            
            <div className="col-start-2 hidden lg:block">
                <AskedsCard number="05" question="Do you offer ongoing support and maintenance after the project is completed?" answer="Yes, we offer ongoing support and maintenance after
                    the project is completed. We work with a variety of clients, from startups to established businesses, and we are committed to delivering high-quality work 
                    that meets your specific needs." />

                <AskedsCard number="06" question="Can you work with existing design or development frameworks?" answer="Yes, we can work with existing design or development frameworks.
                    We work with a variety of clients, from startups to established businesses, and we are committed to delivering high-quality work that meets your specific needs." />

                <AskedsCard number="07" question="How involved will I be in the project development process?" answer="We work with a variety of clients, from startups to established
                    businesses, and we are committed to delivering high-quality work that meets your specific needs." />

                <AskedsCard number="08" question="Can you help with website or app maintenance and updates?" answer="Yes, we can help with website or app maintenance and updates.
                    We work with a variety of clients, from startups to established businesses, and we are committed to delivering high-quality work that meets your specific needs." />
            </div>
        </ul>
    )
}

export default Askeds