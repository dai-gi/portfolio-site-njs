import Link from "next/link";

export default function Navigation() {
    return (
        <header className="container flex flex-row items-center mx-auto py-10 max-w-screen-lg text-gray-800">
            <Link href="/">
                <a className="text-4xl">DU</a>
            </Link>
            <nav className="ml-auto">
                <Link href="/">
                    <a className="mr-20 font-light">Home</a>
                </Link>
                <Link href="/about">
                    <a className="font-light">About</a>
                </Link>
            </nav>
        </header>
    );
}