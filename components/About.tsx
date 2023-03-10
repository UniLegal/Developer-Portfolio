import React from "react";
import Image, { StaticImageData } from "next/image";

export default function About() {
    return (
        <section id="about" className="dark-bg">
            <div className="flex">
                <div className="flex-full">
                    <AboutCard
                        title="5 Years Warranty"
                        icon="/icons/design.svg"
                        description="We provide a 5 years warranty for all our products to ensure peace of mind for all our customers."
                         />
                    <AboutCard
                        title="BCA Approved Window Contractor"
                        icon="/icons/code.svg"
                        description="Our company is a BCA approved and HDB licensed window contractor."
                        />
                    <AboutCard
                        title="Direct-to-consumer with No Hidden Fees"
                        icon="/icons/phone.svg"
                        description="We are the manufacturer of all the products and we promise that no hidden fees for all our service."
                        />
                </div>
                
                <div className="flex-full about-text">
                    <h5 className="gray">Introduce</h5>
                    <h1 className="white">Hello, I&#39;m Skander Blaiti</h1>
                    <h3 className="white">Design is not just what it looks like. Design is how it works!</h3>
                    <p className="gray">I have proceeded my dream to be a developer as it has been my lifelong ambition. I am a talented Front-End developer with a UI/UX design background. During my 4 years of work as a freelancer, I had the opportunity to enhance my expertise by collaborating with different companies and by creating useful content for both business and customer use.<br/><br/>
                    I am naturally persevered, self-confident, quietly curios, innovative and constantly challenging my skills.</p>
                </div>
            </div>

            {/*<div className="flex partners justify-space">
                <Image src="/images/partners/wallety.png" height={45} width={180} alt="wallety" />
                <Image src="/images/partners/artisty.png" height={45} width={180} alt="artisty" />
                <Image src="/images/partners/khedma-lik.png" height={45} width={180} alt="khedma-lik" />
                <Image src="/images/partners/directy.png" height={45} width={180} alt="directy" />
                <Image src="/images/partners/telefy.png" height={45} width={180} alt="telefy" />
    </div>*/}
        </section>
    )
}

type Props = {
    title: string,
    icon: string | StaticImageData,
    description: string,
    //projects: number
}

function AboutCard ({title, icon, description} : Props) {
    return(
        <div className="light-bg about-card">
            <div className="flex justify-space">
                <h3 className="green">{title}</h3>
                <Image src={icon} width={28} height={28} alt={title} />
            </div>
            <p className="white">{description}</p>
            {/*<span className="gray">{projects.toString()} projects</span>*/}
        </div>
    )
}