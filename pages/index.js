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
      <div className="py-32 md:py-48">
        <div className="flex items-center justify-center">
          <div>
            <h1 className="text-6xl md:text-9xl text-gray-600 title">{profiles.map((profile) => profile.title)}</h1>
            <p className="text-gray-400 md:text-xl">{profiles.map((profile) => profile.subtitle)}
              <a className="fab fa-twitter md:text-2xl ml-7 mr-3" href={profiles.map((profile) => profile.twitter)}></a>
              <a className="fab fa-github md:text-2xl" href={profiles.map((profile) => profile.twitter)}></a>
            </p>
          </div>
        </div>
        <div className="flex items-end pb-2">

        </div>
      </div>
      <div className="mx-auto max-w-screen-lg my-10 md:my-20 grid grid-cols-12 bg-gray-100 py-20 ">
        <div className="flex items-center justify-center col-span-12">
          <h1 className="text-5xl font-thin text-gray-800 border-b border-gray-700 w-16 flex justify-center pb-3 mb-12" id="about">About</h1>
        </div>
        <div className="col-span-6 flex justify-end items-center mt-12">
          <div className="bg-gray-300 relative h-56 w-56 right-24 top-5">
            <img className="h-56 w-56 object-cover mr-14 absolute left-10 -top-10" src={profiles.map((profile) => profile.subimage)}/>
          </div>
        </div>
        <div className="col-span-6 mt-6 text-gray-700 ml-20">
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
      <main className="mx-auto px-5 max-w-screen-lg my-32 grid grid-cols-12">
        <div className="flex items-center justify-center col-span-12">
          <h1 className="text-5xl font-thin text-gray-800 border-b border-gray-700 w-16 flex justify-center pb-3 mb-12" id="work">Work</h1>
        </div>
        {productions && productions.map((production) => <Production key={production.id} production={production} />)}
      </main>
      <div className="flex items-center justify-center mt-24 mb-10">
        <a className="text-gray-700 font-light text-3xl animate-bounce" href="/">↑</a>
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
