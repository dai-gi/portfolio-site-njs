import Link from "next/link";
import React, {useState} from "react";

export default function Navigation() {

    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(!active);
    };

    return (
        <header className="container mx-auto py-10 px-8 max-w-screen-lg text-gray-800">
            <div className="flex items-center justify-between">
                <Link href="/">
                    <a>
                        <svg className="h-9 w-9" width="40" height="53" viewBox="0 0 40 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.0482502 52V0.799999H8.24025C11.1843 0.799999 13.2963 1.46133 14.5763 2.784C15.8989 4.10666 16.6029 6.28266 16.6883 9.312C16.7309 13.3653 16.7523 17.2267 16.7523 20.896C16.7949 24.5653 16.7949 28.2347 16.7523 31.904C16.7523 35.5307 16.7309 39.392 16.6883 43.488C16.6029 46.5173 15.8989 48.6933 14.5763 50.016C13.2536 51.3387 11.1203 52 8.17625 52H0.0482502ZM4.27225 48.16H8.17625C9.62692 48.16 10.6723 47.8187 11.3123 47.136C11.9949 46.4533 12.3576 45.3653 12.4003 43.872C12.5709 32.224 12.5709 20.5547 12.4003 8.864C12.3576 7.41333 11.9949 6.34667 11.3123 5.664C10.6723 4.98133 9.64825 4.64 8.24025 4.64H4.27225V48.16ZM31.5588 52.448C28.6148 52.448 26.4814 51.808 25.1588 50.528C23.8788 49.248 23.2174 47.1147 23.1748 44.128C23.0468 29.7067 23.0468 15.264 23.1748 0.799999H27.4628C27.3774 8.01066 27.3134 15.3493 27.2708 22.816C27.2708 30.24 27.3134 37.5573 27.3988 44.768C27.3988 47.456 28.7854 48.8 31.5588 48.8C34.2894 48.8 35.6548 47.456 35.6548 44.768C35.6974 37.5573 35.7188 30.24 35.7188 22.816C35.7614 15.3493 35.7401 8.01066 35.6548 0.799999H39.8788C40.0068 15.264 40.0068 29.7067 39.8788 44.128C39.8361 47.1147 39.1748 49.248 37.8948 50.528C36.6148 51.808 34.5028 52.448 31.5588 52.448Z" fill="black"/>
                        </svg>
                    </a>
                </Link>
                <nav className="hidden md:block md:ml-auto">
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
                <div className="md:hidden">
                    <div>
                        <button type="button" className="border border-gray-400 hover:border-gray-500 inline-flex items-center justify-end p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500" onClick={handleClick}>
                            {/* Humberger icon */}
                            <svg className={`${active ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            {/* X icon */}
                            <svg className={`${active ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className={`${active ? '' : 'hidden'} mt-10`}>
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <Link href="/">
                        <a href="#" className="text-gray-700 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Home</a>
                    </Link>
                    <Link href="#about">
                        <a href="#" className="text-gray-700 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</a>
                    </Link>
                    <Link href="#work">
                        <a href="#" className="text-gray-700 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Work</a>
                    </Link>
                    <Link href="/">
                        <a href="#" className="text-gray-700 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
                    </Link>
                </div>
            </div>
        </header>
    );
}
