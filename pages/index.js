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
      <div className="grid grid-cols-2 h-80 my-28 ">
        <div className="flex items-center justify-end mr-12 pb-15">
          <div>
            <h1 className="text-6xl font-light text-gray-800">{profiles.map((profile) => profile.title)}</h1>
          </div>
        </div>
        <div className="bg-gray-400 w-96 h-72 relative inset-8 ml-12">
          <div className="flex items-center justify-center bg-gray-200 w-96 h-72 absolute -inset-8">
            <i className="fas fa-images text-9xl text-gray-400 text-opacity-25"></i>
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
