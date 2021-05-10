import Navigation from "./navigation";
import Link from "next/link";

export default function Layout(props) {
    return (
        <div className="flex flex-col min-h-screen">
            <Navigation />
            <section className="mx-auto px-32 container flex items-center justify-end w-full h-7 mb-3">
                <Link href="/">
                    <a className="fab fa-twitter text-xl text-gray-500 mr-7"></a>
                </Link>
                <Link href="/">
                    <a className="fab fa-facebook-f text-xl text-gray-500"></a>
                </Link>
            </section>
            <section className="h-96 items-center grid grid-cols-2 bg-gray-200">
                <div>
                    <h1 className="text-5xl flex justify-end">DAISUKE UEDA</h1>
                    <p className="text-xl flex justify-end mr-36 mt-2">駆け出しエンジニア</p>
                </div>
                <div className="text-9xl flex justify-start ml-36">
                    <i className="fas fa-user-circle text-gray-400"></i>
                </div>
            </section>
            <body className="flex flex-col min-h-screen">
                <main className="mx-auto px-5 max-w-screen-lg flex-grow">
                    {props.children}
                </main>
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