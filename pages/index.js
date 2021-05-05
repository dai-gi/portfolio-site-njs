import Head from 'next/head';
import Link from "next/link";


export default function Home() {
  return (
    <div>
      <Head>
        <title>UD Portfolio</title>
      </Head>
      <div className="flex items-center justify-end w-full h-7">
        <Link href="/">
          <a className="fab fa-twitter text-xl text-gray-500 mr-7"></a>
        </Link>
        <Link href="/">
          <a className="fab fa-facebook-f text-xl text-gray-500"></a>
        </Link>
      </div>
      <div className="h-screen items-center grid grid-cols-2 bg-gray-200">
        <div className="">
          <h1 className="text-5xl mr-40">DAISUKE UEDA</h1>
          <p>駆け出しエンジニア</p>
        </div>
        <div className="text-9xl flex justify-center">
          <i className="fas fa-user-circle"></i>
        </div>
      </div>
    </div>
  );
}