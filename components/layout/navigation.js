import Link from "next/link";

export default function Navigation() {
    return (
        <header className="container mx-auto py-10 px-8 max-w-screen-lg text-gray-800">
            <div className="flex items-center justify-between">
                <Link href="/">
                    <div className="border-black border-2 h-12 w-12 relative">
                        <a className="text-4xl logo">
                            <span className="absolute left-1">D</span>
                            <span className="absolute left-3 top-2">U<span className="ml-3">.</span></span>
                        </a>
                    </div>
                </Link>
                <div className="sm:hidden">
                    <div>
                        <button type="button" className="inline-flex items-center justify-end p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>

                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>

                            <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>

                        </button>
                    </div>
                </div>
                <nav className="hidden sm:ml-auto sm:block">
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
            </div>
            <div className="sm:hidden mt-10" id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1">

                    <a href="#" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Dashboard</a>

                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>

                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>

                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>
                </div>
            </div>
        </header>
        // <header>
        //     <div class="mx-auto px-2 sm:px-6 lg:px-8">
        //         <div class="relative flex items-end justify-between h-16">
                    
        //             <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        //                 <div class="flex-shrink-0 flex items-center">
        //                     <img class="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow"/>
        //                     <img class="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow"/>
        //                 </div>
        //                 <div class="hidden sm:block sm:ml-6">
        //                     <div class="flex space-x-4">
        //                         <a href="#" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Dashboard</a>

        //                         <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Team</a>

        //                         <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>

        //                         <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Calendar</a>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </header>
    );
}