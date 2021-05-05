import Navigation from "./navigation";
import Link from "next/link";

export default function Layout(props) {
    return (
        <div className="flex flex-col min-h-screen">
            <Navigation />
            <section className="mx-auto container flex items-center justify-end w-full h-7">
                <Link href="/">
                    <a className="fab fa-twitter text-xl text-gray-500 mr-7"></a>
                </Link>
                <Link href="/">
                    <a className="fab fa-facebook-f text-xl text-gray-500"></a>
                </Link>
            </section>
            <section className="h-screen items-center grid grid-cols-2 bg-gray-200">
                <div className="">
                    <h1 className="text-5xl mr-40">DAISUKE UEDA</h1>
                    <p>駆け出しエンジニア</p>
                </div>
                <div className="text-9xl flex justify-center">
                    <i className="fas fa-user-circle"></i>
                </div>
            </section>
            <main className="mx-auto px-5 max-w-screen-lg">
                {props.children}
            </main>
            <footer className="container flex items-center justify-end mx-auto w-full h-36 text-sm font-light">
                ©︎ UD All rights reserved.
            </footer>
        </div>
    );
}