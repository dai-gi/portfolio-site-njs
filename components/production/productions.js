import Link from "next/link";

export default function Production({production}) {
    return (
        <Link href={`/productions/${production.id}`}>
            <a className="max-w-sm overflow-hidden drop-shadow-md col-span-4 text-gray-800">
                <div className="flex justify-center">
                    <img className="w-64 border border-gray-300 rounded h-64" src={production.thumbnail} alt="Portfolio1" />
                </div>
                <div className="px-6 py-4 flex justify-center">
                    <p className="text-xl mb-2">{production.title}</p>
                </div>
            </a>
        </Link>
    );
}