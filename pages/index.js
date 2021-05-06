import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>UD Portfolio</title>
      </Head>
      <section>
        <div className="h-28 flex items-center mt-24 mb-10">
          <h1 className="text-5xl font-thin">Works</h1>
        </div>
      </section>
    </div>
  );
}