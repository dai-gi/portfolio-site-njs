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
                <div className="flex items-center justify-center text-gray-400 hover:text-gray-500 md:hidden">
                    <button type="button" className="h-5 w-5 focus:outline-none" onClick={handleClick}>
                        <svg className={`${active ? 'hidden' : 'block'}`} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" class="svg-inline--fa fa-chevron-down fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path className="fill-current text-gray-400 hover:text-gray-500" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                        </svg>
                        <svg className={`${active ? 'block' : 'hidden'}`} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="minus" class="svg-inline--fa fa-minus fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path className="fill-current text-gray-400 hover:text-gray-500"  fill="currentColor" d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                        </svg>
                    </button>
                </div>
                <div className={`${active ? '' : 'hidden'} mt-10 flex justify-center`}>
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <Link href="/">
                            <a href="#" className="text-gray-700 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Home</a>
                        </Link>
                        <Link href="#about">
                            <a href="#" className="text-gray-700 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</a>
                        </Link>
                        <Link href="#work">
                            <a href="#" className="text-gray-700 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Work</a>
                        </Link>
                        <Link href="/">
                            <a href="#" className="text-gray-700 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
                        </Link>
                    </div>
                </div>
                <footer className="text-sm font-light text-gray-800">
                    <div className="grid grid-cols-12 mx-auto max-w-screen-lg px-5 h-36 md:px-10">
                        <nav className="hidden md:col-span-8 md:flex md:items-center">
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