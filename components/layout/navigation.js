import Link from "next/link";
import React, {useState} from "react";

export default function Navigation() {

    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(!active);
    };

    return (
        <div className="container max-w-screen-lg mx-auto my-10 text-gray-800">
            <div className="flex items-center justify-between">
                <Link href="/">
                    <a>
                        <svg className="h-10 w-10 md:h-14 md:w-14" width="47" height="40" viewBox="0 0 47 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.271469 9.876L0.199469 9.3C0.199469 7.62 0.931469 6.12 2.39547 4.8C5.01147 2.472 9.23547 1.032 15.0675 0.479998C15.9555 0.407999 16.9875 0.372 18.1635 0.372C19.3635 0.372 20.8755 0.551999 22.6995 0.911999C24.5235 1.248 26.0235 1.884 27.1995 2.82C29.0715 4.356 30.0075 6.372 30.0075 8.868C30.0075 11.34 29.2635 13.632 27.7755 15.744C26.3115 17.832 24.4395 19.452 22.1595 20.604C19.8795 21.756 17.4435 22.332 14.8515 22.332C12.2595 22.332 10.1595 21.72 8.55147 20.496C8.52747 20.52 8.40747 20.724 8.19147 21.108C7.99947 21.492 7.79547 21.864 7.57947 22.224C6.47547 23.976 5.49147 24.216 4.62747 22.944C4.12347 22.2 3.87147 21.312 3.87147 20.28C3.87147 19.248 3.97947 18 4.19547 16.536C4.21947 16.392 4.12347 16.056 3.90747 15.528C3.83547 15.288 3.91947 15.048 4.15947 14.808C4.35147 14.664 4.61547 14.544 4.95147 14.448C5.31147 14.352 5.55147 14.352 5.67147 14.448C5.81547 14.544 5.79147 14.808 5.59947 15.24C5.40747 15.648 5.31147 16.032 5.31147 16.392C5.31147 16.752 5.68347 17.292 6.42747 18.012C7.17147 18.708 7.62747 19.08 7.79547 19.128C8.37147 17.712 9.59547 15.06 11.4675 11.172C11.6835 10.74 11.7915 10.416 11.7915 10.2C11.7915 9.984 11.7675 9.816 11.7195 9.696C11.8395 9 12.5955 7.896 13.9875 6.384C15.4035 4.872 16.5435 4.116 17.4075 4.116C17.7435 4.116 18.1635 4.236 18.6675 4.476C19.1715 4.692 19.4595 5.004 19.5315 5.412C19.5315 5.556 19.5195 5.64 19.4955 5.664C19.4715 5.664 19.4115 5.64 19.3155 5.592C19.2195 5.544 19.1475 5.52 19.0995 5.52C18.3315 5.52 17.4195 6.084 16.3635 7.212C15.3315 8.316 14.2995 9.768 13.2675 11.568C11.4435 14.688 9.97947 17.448 8.87547 19.848C10.3635 20.928 11.9835 21.468 13.7355 21.468C16.0155 21.468 18.1995 20.88 20.2875 19.704C22.3755 18.528 24.0555 17.172 25.3275 15.636C27.3915 13.116 28.4235 10.632 28.4235 8.184C28.4235 6.384 27.7035 4.776 26.2635 3.36C24.8475 1.944 22.5915 1.188 19.4955 1.092C19.3515 1.092 19.2075 1.092 19.0635 1.092C16.6155 1.092 14.0355 1.5 11.3235 2.316C8.61147 3.108 6.29547 4.248 4.37547 5.736C2.45547 7.224 1.49547 8.772 1.49547 10.38C1.49547 10.788 1.61547 11.148 1.85547 11.46C2.11947 11.772 2.38347 11.988 2.64747 12.108C2.93547 12.228 3.28347 12.36 3.69147 12.504C4.12347 12.648 4.39947 12.756 4.51947 12.828C4.66347 12.876 4.74747 12.936 4.77147 13.008C4.81947 13.2 4.65147 13.296 4.26747 13.296C3.37947 13.224 2.47947 12.9 1.56747 12.324C0.679469 11.724 0.235469 11.028 0.235469 10.236C0.235469 10.116 0.247469 9.996 0.271469 9.876ZM5.13147 17.76C5.13147 21 5.35947 22.62 5.81547 22.62C6.15147 22.62 6.63147 21.78 7.25547 20.1C7.30347 20.028 7.32747 19.98 7.32747 19.956C7.15947 19.812 6.79947 19.464 6.24747 18.912C5.71947 18.336 5.34747 17.952 5.13147 17.76Z" fill="black"/>
                            <path d="M26.6294 33.152C24.9254 33.152 24.0734 32.048 24.0734 29.84C24.0734 27.824 25.0694 24.776 27.0614 20.696C28.1414 18.464 28.7774 17.12 28.9694 16.664C29.1854 16.184 29.1974 15.956 29.0054 15.98C28.8134 16.028 28.5374 16.184 28.1774 16.448C26.3054 18.032 24.6734 18.872 23.2814 18.968C23.0414 18.992 22.9214 18.932 22.9214 18.788C22.9694 18.572 23.1254 18.44 23.3894 18.392C24.3254 18.296 25.7174 17.504 27.5654 16.016C29.4374 14.504 30.5654 13.388 30.9494 12.668C31.0454 12.38 31.5014 12.236 32.3174 12.236C32.9414 12.284 33.2414 12.428 33.2174 12.668C29.0894 19.628 26.7494 24.596 26.1974 27.572C26.0774 28.244 26.0174 28.844 26.0174 29.372C26.0174 31.052 26.6174 31.892 27.8174 31.892C29.7854 31.892 32.6894 30.032 36.5294 26.312C38.1374 15.848 40.7054 10.616 44.2334 10.616C45.4814 10.616 46.2614 11.024 46.5734 11.84C46.7174 12.2 46.7894 12.584 46.7894 12.992C46.7894 13.376 46.7054 13.784 46.5374 14.216C46.1534 15.488 45.5174 16.796 44.6294 18.14C43.7654 19.46 42.5414 21.056 40.9574 22.928C39.3974 24.776 38.4734 25.892 38.1854 26.276C37.8494 27.98 37.6334 30.128 37.5374 32.72C37.5374 32.864 37.5374 32.996 37.5374 33.116C37.5374 35.396 37.9334 37.016 38.7254 37.976C39.0614 38.36 39.3734 38.552 39.6614 38.552C39.9734 38.552 40.2494 38.408 40.4894 38.12C40.6094 37.928 40.7534 37.736 40.9214 37.544C41.1134 37.376 41.2574 37.316 41.3534 37.364C41.4734 37.436 41.4974 37.592 41.4254 37.832C41.1854 38.216 41.0294 38.444 40.9574 38.516C40.5734 38.996 39.9014 39.236 38.9414 39.236C38.8694 39.236 38.7854 39.236 38.6894 39.236C37.2974 39.212 36.4094 38.036 36.0254 35.708C35.9294 34.964 35.8814 33.956 35.8814 32.684C35.8814 31.436 36.0374 29.744 36.3494 27.608C32.5094 31.304 29.2694 33.152 26.6294 33.152ZM45.4214 13.64C45.5414 13.208 45.6014 12.812 45.6014 12.452C45.6014 12.092 45.5174 11.84 45.3494 11.696C45.2054 11.552 45.0614 11.48 44.9174 11.48C44.5814 11.48 44.1374 11.78 43.5854 12.38C41.4014 14.804 39.7934 18.668 38.7614 23.972C40.1054 22.7 41.4374 21.068 42.7574 19.076C44.1014 17.084 44.9894 15.272 45.4214 13.64Z" fill="black"/>
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
                        <button type="button" className="inline-flex items-center justify-end p-2 text-gray-400 hover:text-gray-500 border border-gray-400 hover:border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500" onClick={handleClick}>
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
                        <a href="#" className="px-3 py-2 text-gray-700 hover:text-white text-base font-medium hover:bg-gray-700 block rounded-md" aria-current="page">Home</a>
                    </Link>
                    <Link href="#about">
                        <a href="#" className="px-3 py-2 text-gray-700 hover:text-white text-base font-medium hover:bg-gray-700 block rounded-md">About</a>
                    </Link>
                    <Link href="#work">
                        <a href="#" className="px-3 py-2 text-gray-700 hover:text-white text-base font-medium hover:bg-gray-700 block rounded-md">Work</a>
                    </Link>
                    <Link href="/">
                        <a href="#" className="px-3 py-2 text-gray-700 hover:text-white text-base font-medium hover:bg-gray-700 block rounded-md">Contact</a>
                    </Link>
                </div>
            </div>
        </div>
    );
}
