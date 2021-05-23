import Link from "next/link";

export default function Production({production}) {
    return (
        <Link href={`/productions/${production.id}`}>
            <a className="max-w-sm overflow-hidden drop-shadow-md col-span-4 m-4">
                <img className="w-full border rounded h-64" src={production.thumbnail} alt="Portfolio1" />
                <div className="px-6 py-4 flex justify-center">
                    <p className="text-xl mb-2">{production.title}</p>
                </div>
            </a>
        </Link>
    );
}