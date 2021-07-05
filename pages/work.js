import List from "../components/production/list";
import { getAllProductionsData } from "../lib/productions";

export default function Work({ productions }) {
    return (
        <div className="max-w-screen-lg mx-auto mt-8">
            <div className='flex items-center'>
                <h1 className='w-16 pb-3 text-5xl text-gray-800 font-thin'>
                    Work
                </h1>
            </div>
            <div className='px-5 mt-16 mx-auto max-w-screen-lg'>
                {productions && productions.map((production) => <List key={production.id} production={production} />)}
            </div>
        </div>
    );
}

export async function getStaticProps() {
    const productions = await getAllProductionsData();

    return {
        props: { productions },
        revalidate: 3
    };
}
