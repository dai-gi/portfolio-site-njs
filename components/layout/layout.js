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
                <div className="flex items-center justify-center text-gray-400 hover:text-gray-500 my-10 md:my-20">
                    <button type="button" className="h-4 w-4 focus:outline-none" onClick={handleClick}>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-double-up" class="svg-inline--fa fa-angle-double-up fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                        <path className="fill-current text-gray-400 hover:text-gray-500" fill="currentColor" d="M177 255.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 351.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 425.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1zm-34-192L7 199.7c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l96.4-96.4 96.4 96.4c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9l-136-136c-9.2-9.4-24.4-9.4-33.8 0z"></path>
                    </svg>
                    </button>
                </div>
                <footer className="flex items-center justify-center text-sm font-light text-gray-800 my-7">
                    <p>©︎ UD All rights reserved.</p>
                </footer>
            </body>
        </div>
    );
}