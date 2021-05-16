import Link from "next/link";

export default function Sns() {
    return (
        <section>
            <div className="mx-auto px-5 flex items-center justify-end max-w-screen-lg h-7 mb-3">
                <Link href="https://twitter.com/dai_twii">
                    <a className="fab fa-twitter text-xl text-gray-500"></a>
                </Link>
            </div>
        </section>
    );
}
