import Link from "next/link";

export default function Profile({ profile }) {
    return (
        <section>
            <div className="mx-auto px-5 flex items-center justify-end max-w-screen-lg h-7 mb-3">
                <Link href={profile.twitter}>
                    <a className="fab fa-twitter text-xl text-gray-500 mr-7"></a>
                </Link>
                <Link href="/">
                    <a className="fab fa-facebook-f text-xl text-gray-500"></a>
                </Link>
            </div>
            <div className="h-96 items-center grid grid-cols-2 bg-gray-200">
                <div>
                    <h1 className="text-5xl flex justify-end">{profile.title}</h1>
                    <p className="text-xl flex justify-end mr-36 mt-2">{profile.subtitle}</p>
                </div>
                <div className="text-9xl flex justify-start ml-36">
                    <i className="fas fa-user-circle text-gray-400"></i>
                </div>
            </div>
        </section>
    )
}