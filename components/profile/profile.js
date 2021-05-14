import fetch from "node-fetch";

const SERVERURL = "http://127.0.0.1:8000/";

// プロフィールデータ一覧を取得
export async function getAllProfileData() {
    const res = await fetch(new URL(`${SERVERURL}api/profile/`));
    const profiles = await res.json();
    return profiles;
}

// プロフィールデータのIDを取得
export async function getAllProfileIds() {
    const res = await fetch(new URL(`${SERVERURL}api/profile/`));
    const profiles = await res.json();
    return profile.map((profile) => {
        return {
            params: {
                id: String(profile.id),
            },
        };
    });
}