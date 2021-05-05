import Link from "next/link";

export default function Navigation() {
    return (
        <header className="container flex flex-row items-center mx-auto px-5 py-14 max-w-screen-lg">
            <Link href="/">
                <a className="text-4xl font-bold text-red-300">UD</a>
            </Link>
            <nav className="ml-auto">
                <Link className="/">
                    <a className="mr-5">Home</a>
                </Link>
                <Link className="/about">
                    <a className="mr-5">About</a>
                </Link>
            </nav>
        </header>
    )
}