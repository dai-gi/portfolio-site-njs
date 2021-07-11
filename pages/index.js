import Head from 'next/head';
import { getAllProfilesData } from "../lib/profiles";
import Production from "../components/production/productions";
import { getAllProductionsData } from "../lib/productions";

export default function Home({ profiles, productions }) {
  return (
    <div>
      <Head>
        <title>DU Portfolio</title>
      </Head>
      <div className="flex items-center justify-center pb-20 mt-72 mb-96 md:pb-0 md:mt-52">
        <h1 className="text-6xl md:text-8xl xl:text-9xl text-gray-600 title">{profiles.map((profile) => profile.title)}</h1>
      </div>
      <main>
        <div className="flex items-center justify-center">
          <h1 className="flex justify-center w-16 pb-3 text-4xl text-gray-800 font-thin border-b border-gray-700 md:text-5xl" id="work">Work</h1>
        </div>
        <div className="grid grid-cols-12 px-5 mt-9 mx-auto max-w-screen-lg md:mt-20">
          {productions && productions.map((production) => <Production key={production.id} production={production} />)}
        </div>
        <div className="flex justify-center mt-44 mb-20">
          <div className="float-left w-28 h-28 md:w-32 md:h-32">
            <img className="w-28 h-28 md:w-32 md:h-32 object-cover border border-gray-300" src={profiles.map((profile) => profile.subimage)}/>
          </div>
          <div className="flex items-center ml-6 md:ml-10 text-gray-700">
            <p className="text-sm md:text-base">{profiles.map((profile) => profile.name)}</p>
          </div>
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
