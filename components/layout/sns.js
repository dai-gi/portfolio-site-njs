import { getAllProfilesData } from "../../lib/profiles";

export default function Sns() {
    return (
        <div className="container mx-auto my-7 max-w-screen-lg text-gray-800">
            <div className="flex justify-end my-10">
                <div>
                    <a className="fab fa-twitter mr-10 md:text-2xl" href="https://twitter.com/dai_twii"></a>
                    <a className="fab fa-github md:text-2xl" href="https://github.com/dai-gi"></a>
                </div>
            </div>
        </div>
    );
}
