import Link from "next/link";

export default function Production({production}) {
    return (
        <Link href={`/productions/${production.id}`}>
            <a className="col-span-12 max-w-sm mt-8 text-gray-800 overflow-hidden drop-shadow-md md:col-span-4 md:mt-0">
                <div className="flex justify-center">
                    <img className="w-56 h-56 border border-gray-400 rounded" src={production.thumbnail} alt="Portfolio1" />
                </div>
                <div className="flex justify-center my-4 text-xl">
                    <p>{production.title}</p>
                </div>
            </a>
        </Link>
    );
}