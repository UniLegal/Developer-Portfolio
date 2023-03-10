import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Image, { StaticImageData } from "next/image";

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Blaiti - Frontend Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Skander Blaiti" />
        <meta name="keywords" content="ReactJS, NextJS" />
        <meta name="description" content="I am a talented Front-End developer with a UI/UX design background." />
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#2D2E32" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:site_name" content="Blaiti - Frontend Developer" />
        <meta property="og:locale" content="en_GB" />
        <title data-rh="true">Blaiti - Frontend Developer</title>
        <meta data-rh="true" property="og:type" content="website"/>
        <meta data-rh="true" property="og:title" content="Blaiti - Frontend Developer"/>
        <meta data-rh="true" property="og:image" content="/images/blaiti.png"/>
      </Head>

      {/* Header */}
      <NavBar />

      <main>
        {/* About */}
        <section id="about" className="dark-bg">
            <div className="flex">
                <div className="flex-full">
                    <AboutCard
                        title="Jacky So"
                        icon="/icons/design.svg"
                        description="+65-8832-9336"
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
                
            </div>
        </section>      
        </main>

      {/* Footer */}
      <Footer />
    </>
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
export default Contact;