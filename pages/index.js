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
      <div className="grid grid-cols-12 py-48">
        <div className="flex items-center justify-end col-span-7">
          <div>
            <h1 className="text-8xl font-thin text-gray-600 title border-r-2 border-gray-700 pr-12">{profiles.map((profile) => profile.title)}</h1>
            <p className="text-gray-400">{profiles.map((profile) => profile.subtitle)}</p>
          </div>
        </div>
        <div className="flex items-center ml-12">
          <a className="fab fa-twitter text-3xl text-gray-600" href={profiles.map((profile) => profile.twitter)}></a>
          <a className="fab fa-github text-3xl text-gray-600 ml-7" href={profiles.map((profile) => profile.twitter)}></a>
        </div>
      </div>
      <div className="mx-auto max-w-screen-lg my-20 grid grid-cols-12 bg-gray-100 py-20 ">
        <div className="flex items-center justify-center col-span-12">
          <h1 className="text-4xl font-thin text-gray-800 border-b border-gray-700 w-12 flex justify-center pb-3" id="about">About</h1>
        </div>
        <div className="col-span-6 flex justify-end items-center mt-10">
          <img className="h-36 w-36 object-cover mr-14" src={profiles.map((profile) => profile.subimage)}/>
        </div>
        <div className="col-span-6 mt-10 text-gray-700 pt-5">
          <p className="mb-1">name:&nbsp;&nbsp;{profiles.map((profile) => profile.name)}</p>
          <p>skill:&nbsp;{profiles.map((profile) => profile.programming)}</p>
        </div>
      </div>
      <main className="mx-auto px-5 max-w-screen-lg my-32 grid grid-cols-12">
        <div className="flex items-center justify-center col-span-12 mb-10">
          <div className="grid grid-cols-12">
            <h1 className="text-4xl font-thin text-gray-800 flex justify-center col-span-12" id="about">Productions</h1>
            <div className="flex justify-center col-span-12">
              <p className="border-b border-gray-700 w-20 flex justify-center pb-3 text-gray-400 text-xl">制作物</p>
            </div>
            <p className="border-b w-10"></p>
          </div>
        </div>
        {productions && productions.map((production) => <Production key={production.id} production={production} />)}
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
