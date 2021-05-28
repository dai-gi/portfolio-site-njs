import Navigation from "./navigation";
import Link from "next/link";

export default function Layout(props) {
    return (
        <div className="flex flex-col min-h-screen">
            <Navigation />
            <body className="flex flex-col min-h-screen">
                {props.children}
                <footer className="text-sm font-light text-gray-800">
                    <div className="grid grid-cols-12 mx-auto max-w-screen-lg px-5 h-36 md:px-10">
                        <nav className="col-span-8 flex items-center">
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
                        <div className="col-span-4 flex items-center justify-end">
                            ©︎ UD All rights reserved.
                        </div>
                    </div>
                </footer>
            </body>
        </div>
    );
}