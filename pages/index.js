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
      <div className="grid grid-cols-2 bg-gray-100 h-80">
        <div className="flex items-center justify-end">
          <div>
            <h1 className="text-4xl">{profiles.map((profile) => profile.title)}</h1>
            <h2 className="text-xl">{profiles.map((profile) => profile.subtitle)}</h2>
          </div>
        </div>
        <div className="flex items-center ml-28">
          <i className="fas fa-user-circle text-8xl text-gray-300"></i>
        </div>
      </div>
      <main className="mx-auto px-5 max-w-screen-lg mb-10">
        <div className="h-28 flex items-center justify-center mt-24 mb-10">
          <h1 className="text-5xl font-thin">Works</h1>
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
