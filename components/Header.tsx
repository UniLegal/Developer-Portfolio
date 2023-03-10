import React from "react";
import Image from "next/image";

import NavBar from "./NavBar";

export default function Header() {
    return (
        <header>
            <NavBar />
            <div className="header flex light-bg" style={{ backgroundImage: "url(/images/window.jpg)" , backgroundRepeat: 'no-repeat',backgroundPosition:'center',backgroundSize:'cover',paddingBottom:200  }}>
                <div>
                    <button>Front-End Developer</button>
                    <h1 className="white">Talk is cheap.</h1>
                    <h1 className="white">Show me the code!</h1>
                    <p className="gray">I design and code beautiful simple things, and I love what I do.</p>
                    <a className="green" href="mailto:contact@blaiti.com">Let&#39;s chat!</a>
                </div>
                {/*<Image src="/images/window.jpg" layout='fill' alt="blaiti"  />*/}
            </div>
        </header>
    )
}