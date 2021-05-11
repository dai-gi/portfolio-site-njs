import fetch from "node-fetch";

// Django APIサーバーURL
const SERVERURL = "http://127.0.0.1:8000/";

// プロフィールデータを取得
export async function getAllProfileData() {
    const res = await fetch(new URL(`${SERVERURL}api/profile/`));
    const profiles = await res.json();
    return profiles;
}

// プロフィールデータのIDを取得
export async function getAllProfileIds() {
    const res = await fetch(new URL(`${SERVERURL}api/profile/)`));
    const profiles = await res.json();
    return profiles.map((profile) => {
        return {
            paramas: {
                id: String(profile.id),
            },
        };
    });
}