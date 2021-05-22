import { useRouter } from "next/router";
import { getAllProductionIds, getProductionData } from "../../lib/productions";


export default function ProductionData({ production }) {
    const router = useRouter();

    if (router.isFallback || !production) {
        return <div>Loading ...</div>;
    }

    return (
        <div>{production.title}</div>
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