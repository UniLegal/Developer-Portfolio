import React from "react";
import Link from "next/link";

export default function NavBar() {

    return (
        <nav className="flex light-bg justify-space">
            <div className="logo white">
                <Link href="/">JS Aluminium</Link>
            </div>

            <ul className="flex white">
                <li className="green">
                    <Link href="/">Home</Link>
                </li>
                <li>                    
                    <Link href="/#about">Our Products</Link>
                </li>                
                <li>
                    <Link href="/#about">Portfolio</Link>
                </li>                
                <li>
                    <Link href="/contact">Contact Us</Link>
                </li>
            </ul>
        </nav>
    )
}