import Navigation from "./navigation";
import Link from "next/link";

export default function Layout( props ) {
    return (
        <div className="flex flex-col min-h-screen">
            <Navigation />
            <body className="flex flex-col min-h-screen">
                <section>
                    <div className="mx-auto px-5 flex items-center justify-end max-w-screen-lg h-7 mb-3">
                        <Link href="https://twitter.com/dai_twii">
                            <a className="fab fa-twitter text-xl text-gray-500 mr-7"></a>
                        </Link>
                        <Link href="/">
                            <a className="fab fa-facebook-f text-xl text-gray-500"></a>
                        </Link>
                    </div>
                </section>
                {props.children}
                <footer className="text-sm font-light">
                    <div className="grid grid-cols-12 mx-auto max-w-screen-lg px-5 h-36">
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
                    </div>
                </footer>
            </body>
        </div>
    );
}