import Navigation from "./navigation";
import Sns from "./sns";
import Link from "next/link";

export default function Layout( props ) {
    return (
        <div className="flex flex-col min-h-screen">
            <Navigation />
            <Sns />
            <body className="flex flex-col min-h-screen">
                <div className="flex-grow">
                    {props.children}
                </div>
                <div className="flex justify-center mb-8 md:m-0">
                    <Link href="/" >
                        <a href="#" className="flex items-center justify-center w-11 h-11 md:w-12 md:h-12 p-4 text-gray-400 rounded-full border-2 md:my-20 hover:opacity-50">
                            <span className="w-4 h-4 md:h-5">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-double-up" class="svg-inline--fa fa-angle-double-up fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                    <path fill="currentColor" d="M177 255.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 351.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 425.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1zm-34-192L7 199.7c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l96.4-96.4 96.4 96.4c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9l-136-136c-9.2-9.4-24.4-9.4-33.8 0z"></path>
                                </svg>
                            </span>
                        </a>
                    </Link>
                </div>
                <div className="border-t-2">
                    <footer className="flex items-center justify-center my-6 text-sm font-light text-gray-800">
                        <p>©︎ UD All rights reserved.</p>
                    </footer>
                </div>
            </body>
        </div>
    );
}