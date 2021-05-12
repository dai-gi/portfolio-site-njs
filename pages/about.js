import Link from "next/link";

export default function About({ profile }) {
    return (
        <body className="flex flex-col min-h-screen">
            <div className="mx-auto px-5 flex items-center justify-end max-w-screen-lg h-7 mb-3">
                <Link href={profile.twitter}>
                    <a className="fab fa-twitter text-xl text-gray-500 mr-7"></a>
                </Link>
                <Link href="/">
                    <a className="fab fa-facebook-f text-xl text-gray-500"></a>
                </Link>
            </div>
        </body>
    );
}