import { getAllProfilesData } from "../lib/profiles"

export default function About({ profiles }) {
    return (
        <div className="flex-grow">
            <div className="h-28 flex items-center justify-center mt-10">
                <h1 className="text-5xl font-thin">About</h1>
            </div>
            <section className="grid grid-cols-12 h-64">
                <div className="flex items-center justify-end mr-2 col-span-5">
                    <i className="fas fa-user text-8xl text-gray-300 bg-gray-200 h-28 w-28 flex items-end justify-center"></i>
                </div>
                <div className="flex items-center col-span-7 ml-5">
                    <div>
                        <p className="mb-1">{profiles.map((profile) => profile.name)}</p>
                        <p className="mb-1">Twitter:<a className="ml-9" href={profiles.map((profile) => profile.twitter)}>dai_twii</a></p>
                        <p className="mb-1">Github:<a className="ml-9" href={profiles.map((profile) => profile.github)}>dai-gi</a></p>
                        <p>学習言語:<span className="ml-5">{profiles.map((profile) => profile.programming)}</span></p>
                    </div>
                </div>
                <div className="flex items-center justify-center w-screen h-60">
                    <div className="w-4/12">
                        <p>約9年間、建設会社で勤めていました。</p>
                        <br></br>
                        <p>2020年1月プログラミング学習をスタート</p>
                        <p>WEB開発エンジニアを目指し、日々、WEB制作やアプリケーション開発をしています。</p>
                    </div>
                </div>
            </section>
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