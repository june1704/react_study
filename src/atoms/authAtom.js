import { atom } from "recoil";
//atom: 전역상태
export const authUserIdAtomState = atom({ 
    key: "authUserIdAtomState",
    default: 0,
});