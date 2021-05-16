import { getAllProfilesData } from "../lib/profiles"

export default function About({ profiles }) {
    return (
        <div className="flex-grow">
            <div className="h-28 flex items-center justify-center mt-10">
                <h1 className="text-5xl font-thin">About</h1>
            </div>
            <section className="grid grid-cols-2 h-64">
                <div className="flex items-center justify-end mr-12">
                    <i className="fas fa-user text-8xl text-gray-300 bg-gray-200 h-28 w-28 flex items-end justify-center"></i>
                </div>
                <div className="flex items-center">
                    <div>
                        <p className="mb-1">{profiles.map((profile) => profile.name)}</p>
                        <p className="mb-1">Twitter:<a className="ml-9" href={profiles.map((profile) => profile.twitter)}>dai_twii</a></p>
                        <p className="mb-1">Github:<a className="ml-9" href={profiles.map((profile) => profile.github)}>dai-gi</a></p>
                        <p>学習言語:<span className="ml-5">{profiles.map((profile) => profile.programming)}</span></p>
                    </div>
                </div>
                <div className="flex items-center justify-center bg-gray-400 w-screen">
                    <div className="w-5/12">
                        <p>{profiles.map((profile) => profile.introduction)}</p>
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