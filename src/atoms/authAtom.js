import { atom } from "recoil";

export const accessTokenAtomState = atom({ //atom: 전역상태
    key: "accessTokenAtomState",
    default: !!localStorage.getItem("AccessToken"),
});