import {RootState} from "./store";

export const getAccessToken = (store: RootState) => store.accessToken.accessToken;