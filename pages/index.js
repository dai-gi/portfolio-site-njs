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
      <div className="flex items-center justify-center mt-64 mb-96">
        <h1 className="text-6xl md:text-9xl text-gray-600 title">{profiles.map((profile) => profile.title)}</h1>
      </div>
      <main>
        <div className="flex items-center justify-center">
          <h1 className="flex justify-center w-16 pb-3 text-4xl text-gray-800 font-thin border-b border-gray-700 md:text-5xl" id="work">Work</h1>
        </div>
        <div className="grid grid-cols-12 px-5 mt-20 mx-auto max-w-screen-lg">
          {productions && productions.map((production) => <Production key={production.id} production={production} />)}
        </div>
        <div className="flex justify-center mt-52 mb-20">
          <div className="float-left w-32 h-32">
            <img className="w-32 h-32 object-cover border border-gray-300" src={profiles.map((profile) => profile.subimage)}/>
          </div>
          <div className="flex items-center ml-10 text-gray-700">
            <p>{profiles.map((profile) => profile.name)}</p>
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
