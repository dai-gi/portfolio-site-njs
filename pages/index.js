import Head from 'next/head';

import { getAllProfilesData } from "../lib/profiles";

import Production from "../components/production/productions";
import { getAllProductionsData } from "../lib/productions";

export default function Home({ profiles, productions }) {
  return (
    <div className="flex-grow">
      <Head>
        <title>DU Portfolio</title>
      </Head>
      <div className="pt-64 pb-96 mb-10 mt-1 md:py-48">
        <div className="flex items-center justify-center">
          <h1 className="text-6xl md:text-9xl text-gray-600 title">{profiles.map((profile) => profile.title)}</h1>
        </div>
      </div>
      <div className="mx-auto max-w-screen-lg my-10 md:my-20 grid grid-cols-12 bg-gray-100 py-20">
        <div className="flex items-center justify-center col-span-12">
          <h1 className="text-4xl font-thin text-gray-800 border-b border-gray-700 w-16 flex justify-center pb-3 mb-16 md:text-5xl" id="about">About</h1>
        </div>
        <div className="col-span-12 md:col-span-6 flex justify-center md:justify-end items-center">
          <div className="border border-gray-300 md:mr-16">
            <img className="object-cover h-40 w-40 md:h-44 md:w-44" src={profiles.map((profile) => profile.subimage)}/>
          </div>
        </div>
        <div className="col-span-12 mt-10 flex justify-center text-gray-700 md:justify-start md:col-span-6 md:mt-6 md:ml-10">
          <div>
            <p className="mt-6 mb-3">{profiles.map((profile) => profile.name)}</p>
            <p>Twitter:
              <a className="mb-1" href={profiles.map((profile) => profile.twitter)}>
                <span className="ml-16">dai_twii</span>
              </a>
            </p>
            <p>Github:
              <a className="mb-1" href={profiles.map((profile) => profile.twitter)}>
                <span className="ml-16">dai_gi</span>
              </a>
            </p>
          </div>
        </div>
      </div>
      <main className="mx-auto px-5 max-w-screen-lg mt-20 grid grid-cols-12">
        <div className="flex items-center justify-center col-span-12">
          <h1 className="text-4xl font-thin text-gray-800 border-b border-gray-700 w-16 flex justify-center pb-3 mb-16 md:text-5xl" id="work">Work</h1>
        </div>
        {productions && productions.map((production) => <Production key={production.id} production={production} />)}
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
