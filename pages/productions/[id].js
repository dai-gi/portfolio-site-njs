import { useRouter } from "next/router";
import { getAllProductionIds, getProductionData } from "../../lib/productions";

export default function ProductionData({ production }) {
    const router = useRouter();

    if (router.isFallback || !production) {
        return <div>Loading ...</div>;
    }

    return (
        <div className="flex-grow">
            <div className="h-28 flex items-center mx-auto max-w-screen-lg">
                <h1 className="text-3xl font-thin">{production.title}</h1>
            </div>
            <div className="h-96 w-full mx-auto max-w-screen-lg">
                <img className="rouded object-cover h-full w-full" src={production.image} alt="Detail image"/>
            </div>
            <div className="grid grid-cols-12 mx-auto max-w-screen-lg my-12">
                <div className="col-span-5 flex flex-col ml-14">
                    <div className="font-normal">
                        <i className="fas fa-code mb-3 text-sm"></i>
                        <span className="ml-3">Skills&nbsp;:</span>
                        <span className="ml-4">{production.skill}</span>
                    </div>
                    <div className="font-normal">
                        <i className="fab fa-github-square mb-3 text-sm"></i>
                        <span className="ml-3">Github&nbsp;:</span>
                        <a className="ml-4" href={production.github}>https://github.com/dai-gi</a>
                    </div>
                    <div className="font-normal">
                        <i className="fas fa-window-maximize mb-3 text-sm"></i>
                        <span className="ml-3">URL&nbsp;:</span>
                        <a className="ml-4" href={production.url}>https://github.com/dai-gi</a>
                    </div>
                    <div className="font-normal">
                        <i className="fas fa-calendar-day mb-3 text-sm"></i>
                        <span className="ml-3">Created&nbsp;:</span>
                        <span className="ml-4">{production.created}</span>
                    </div>
                </div>
                <div className="col-span-7">
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