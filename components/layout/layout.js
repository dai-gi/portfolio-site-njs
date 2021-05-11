import Navigation from "./navigation";
import Link from "next/link";

export default function Layout( props ) {
    return (
        <div className="flex flex-col min-h-screen">
            <Navigation />
            <body className="flex flex-col min-h-screen">
                {props.children}
                <footer className="container grid grid-cols-12 mx-auto w-full h-36 text-sm font-light">
                    <nav className="col-span-8 flex items-center">
                        <Link href="/">
                            <a className="mr-20 font-light">Home</a>
                        </Link>
                        <Link href="/about">
                            <a className="font-light">About</a>
                        </Link>
                    </nav>
                    <div className="col-span-4 flex items-center justify-end">
                        ©︎ UD All rights reserved.
                    </div>
                </footer>
            </body>
        </div>
    );
}