import Head from 'next/head';

import { getAllProfilesData } from "../lib/profiles"

import Production from "../components/production/productions"
import { getAllProductionsData } from "../lib/productions"


export default function Home({ profiles, productions }) {
  return (
    <div className="flex-grow">
      <Head>
        <title>DU Portfolio</title>
      </Head>
      <div className="grid grid-cols-2 relative h-20 w-4/5 mt-28 mb-96 bg-gray-200 -bottom-36 -right-96">
        <div className="flex items-center justify-end mr-12 pb-15 absolute -top-8 left-10">
          <div>
            <h1 className="text-9xl font-thin text-gray-700 title">{profiles.map((profile) => profile.title)}</h1>
          </div>
        </div>

      </div>
      <main className="mx-auto px-5 max-w-screen-lg my-32">
        <div className="h-28 flex items-center justify-center mt-48 mb-5">
          <h1 className="text-5xl font-thin text-gray-800">Works</h1>
        </div>
        <div className="grid grid-cols-12">
          {productions && productions.map((production) => <Production key={production.id} production={production} />)}
        </div>
      </main>
      <div className="flex items-center justify-center mt-24 mb-10">
        <a className="far fa-arrow-alt-circle-up text-gray-300 text-3xl" href="/"></a>
      </div>
    </div>
  );
}


export async function getStaticProps() {
  const profiles = await getAllProfilesData();
  const productions = await getAllProductionsData();

  return {
    props: { profiles, productions },
    revalidate: 3,
  };
}
