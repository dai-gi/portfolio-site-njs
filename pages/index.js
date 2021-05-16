import Head from 'next/head';
import { getAllProfilesData } from "../lib/profiles"

export default function Home({ profiles }) {
  return (
    <div className="flex-grow">
      <Head>
        <title>UD Portfolio</title>
      </Head>
      <section className="grid grid-cols-2 bg-gray-100 h-64">
        <div className="flex items-center justify-end">
          <div>
            <h1 className="text-4xl">{profiles.map((profile) => profile.title)}</h1>
            <h2 className="text-xl">{profiles.map((profile) => profile.subtitle)}</h2>
          </div>
        </div>
        <div className="flex items-center ml-28">
          <i className="fas fa-user-circle text-8xl text-gray-300"></i>
        </div>
      </section>
      <main className="mx-auto px-5 max-w-screen-lg">
        <div className="h-28 flex items-center justify-center mt-24 mb-10">
          <h1 className="text-5xl font-thin">Works</h1>
        </div>
        <div className="grid grid-cols-12">
          <div class="max-w-sm rounded border overflow-hidden drop-shadow-md col-span-4 m-4">
            {/* <img class="w-full" src="../img/a1.JPG" alt="Sunset in the mountains"> */}
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const profiles = await getAllProfilesData();

  return {
    props: {profiles},
    revalidate: 3,
  };
}