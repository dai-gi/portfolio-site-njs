import Head from 'next/head';

import { getAllProfilesData } from "../lib/profiles"

import Production from "../components/production/productions"
import { getAllProductionsData } from "../lib/productions"


export default function Home({ profiles, productions }) {
  return (
    <div className="flex-grow">
      <Head>
        <title>UD Portfolio</title>
      </Head>
      <div className="grid grid-cols-2 h-80 mt-20">
        <div className="flex items-center justify-end mr-12 pb-15">
          <div>
            <h1 className="text-6xl font-light text-gray-500">{profiles.map((profile) => profile.title)}</h1>
          </div>
        </div>
        <div className="bg-gray-400 w-96 h-72 relative inset-8 ml-12">
          <div className="flex items-center justify-center bg-gray-200 w-96 h-72 absolute -inset-8">
            <i className="fas fa-images text-9xl text-gray-400 text-opacity-25"></i>
          </div>
        </div>
      </div>
      <main className="mx-auto px-5 max-w-screen-lg mb-10">
        <div className="h-28 flex items-center justify-center mt-24 mb-10">
          <h1 className="text-5xl font-thin work">Works</h1>
        </div>
        <div className="grid grid-cols-12">
          {productions && productions.map((production) => <Production key={production.id} production={production} />)}
        </div>
      </main>
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
