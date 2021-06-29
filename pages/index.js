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
      <div className="flex items-center justify-center mt-64 mb-96">
        <h1 className="text-6xl md:text-9xl text-gray-600 title">{profiles.map((profile) => profile.title)}</h1>
      </div>
      <div className="grid grid-cols-12 max-w-screen-lg my-10 mx-auto py-20 bg-gray-100 md:my-20">
        <div className="flex items-center justify-center col-span-12">
          <h1 className="flex justify-center w-16 pb-3 mb-16 text-4xl font-thin text-gray-800 border-b border-gray-700 md:text-5xl" id="about">About</h1>
        </div>
        <div className=" flex justify-center items-center col-span-12 md:col-span-6 md:justify-end">
          <div className="border border-gray-300 md:mr-16">
            <img className="h-40 w-40 object-cover md:h-44 md:w-44" src={profiles.map((profile) => profile.subimage)}/>
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
      <main className="grid grid-cols-12 px-5 mt-20 mx-auto max-w-screen-lg">
        <div className="flex items-center justify-center col-span-12">
          <h1 className="flex justify-center w-16 pb-3 mb-16 text-4xl text-gray-800 font-thin border-b border-gray-700 md:text-5xl" id="work">Work</h1>
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
