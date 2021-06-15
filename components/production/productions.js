import Link from "next/link";

export default function Production({production}) {
    return (
        <Link href={`/productions/${production.id}`}>
            <a className="max-w-sm overflow-hidden drop-shadow-md text-gray-800 mt-8 col-span-12 md:mt-0 md:col-span-4">
                <div className="flex justify-center">
                    <img className="w-56 border border-gray-400 rounded h-56" src={production.thumbnail} alt="Portfolio1" />
                </div>
                <div className="px-6 py-4 flex justify-center">
                    <p className="text-xl mb-2">{production.title}</p>
                </div>
            </a>
        </Link>
    );
}