import Navigation from "./navigation";
import Link from "next/link";

import React, {useState} from "react";

export default function Layout(props) {

    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(!active);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Navigation />
            <body className="flex flex-col min-h-screen">
                {props.children}
                <footer className="text-sm font-light text-gray-800">
                    <div className="grid grid-cols-12 mx-auto max-w-screen-lg px-5 h-36 md:px-10">
                        <button></button>
                        <nav className="col-span-12 md:col-span-8 flex items-center">
                            <Link href="/">
                                <a className="mr-10 font-light">Home</a>
                            </Link>
                            <Link href="#about">
                                <a className="mr-10 font-light">About</a>
                            </Link>
                            <Link href="#work">
                                <a className="mr-10 font-light">Work</a>
                            </Link>
                            <Link href="/">
                                <a className="font-light">Contact</a>
                            </Link>
                        </nav>
                        <div className="col-span-12 flex items-center justify-center md:col-span-4 md:justify-end">
                            ©︎ UD All rights reserved.
                        </div>
                    </div>
                </footer>
            </body>
        </div>
    );
}