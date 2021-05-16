import Navigation from "./navigation";
import Sns from "./sns";
import Link from "next/link";

export default function Layout(props) {
    return (
        <div className="flex flex-col min-h-screen">
            <Navigation />
            <body className="flex flex-col min-h-screen">
                <section>
                    <Sns />
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