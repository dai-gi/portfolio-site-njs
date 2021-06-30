import { useRouter } from "next/router";
import { getAllProductionIds, getProductionData } from "../../lib/productions";

export default function ProductionData({ production }) {
    const router = useRouter();

    if (router.isFallback || !production) {
        return <div>Loading ...</div>;
    }

    return (
        <div className="flex-grow text-gray-800">
            <div className="flex items-center max-w-screen-lg mx-auto my-7">
                <h1 className="text-4xl font-thin">{production.title}</h1>
            </div>
            <img className="h-96 w-full max-w-screen-lg mx-auto mb-20 object-cover rounded" src={production.image} alt="Detail image"/>
            <div className="grid grid-cols-12 h-72 max-w-screen-lg mx-auto mt-12 mb-40">
                <div className="flex flex-col col-span-6 ml-40">
                    <div className="flex items-center py-1">
                        <span>Skills&nbsp;:</span>
                        <span className="ml-4">{production.skill}</span>
                    </div>
                    <div className="flex items-center py-1">
                        <span>Github&nbsp;:</span>
                        <a className="ml-4" href={production.github}>https://github.com/dai-gi</a>
                    </div>
                    <div className="flex items-center py-1">
                        <span>URL&nbsp;:</span>
                        <a className="ml-4" href={production.url}>https://github.com/dai-gi</a>
                    </div>
                    <div className="flex items-center py-1">
                        <span>Created&nbsp;:</span>
                        <span className="ml-4">{production.created}</span>
                    </div>
                </div>
                <div className="col-span-6">
                    <p className="w-4/5">{production.description}</p>
                </div>
            </div>
        </div>
    );
}

export async function getStaticPaths() {
    const paths = await getAllProductionIds();

    return {
        paths,
        fallback: true,
    };
}

export async function getStaticProps({ params }) {
    const production = await getProductionData(params.id);
    return {
        props: {
            production,
        },
        revalidate: 3,
    };
}