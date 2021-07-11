import Link from "next/link";

export default function List({production}) {
    return (
        <div className="mb-36">
            <a className="mt-8 text-gray-800" href={production.url}>
                <div className="flex justify-center">
                    <img className="w-11/12 xl:w-full h-72 md:h-96 border border-gray-400 object-cover  hover:opacity-70" src={production.thumbnail} alt="Portfolio" />
                </div>
            </a>
            <div className="px-5 md:px-10 xl:px-0 mt-9">
                <div className="flex items-center">
                    <a className="flex items-center text-xl text-gray-800 hover:opacity-50" href={production.url}>
                        {production.title}<span className="ml-3 text-xs fas fa-external-link-alt"></span>
                    </a>
                </div>
                <p className="my-6 font-light text-md md:text-lg">Django<span className="mx-2">|</span>Next.js<span className="mx-2">|</span></p>
                <p className="font-light text-md xl:text-lg">
                    ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト
                    ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキ
                </p>
            </div>
        </div>
    );
}