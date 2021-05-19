import fetch from "node-fetch";

// Django APIサーバーURL
const SERVERURL = "http://127.0.0.1:8000/";

// プロフィールデータを取得
export async function getAllProductionsData() {
    const res = await fetch(new URL(`${SERVERURL}api/production/`));
    const productions = await res.json();
    return productions;
}

// プロフィールデータのIDを取得
export async function getAllProductionIds() {
    const res = await fetch(new URL(`${SERVERURL}api/production/`));
    const productions = await res.json();
    return productions.map((production) => {
        return {
            params: {
                id: String(production.id),
            },
        };
    });
}

export async function getProductionData(id) {
    const res = await fetch(new URL(`${SERVERURL}api/production/${id}/`));
    const production = await res.json();
    return production;
}