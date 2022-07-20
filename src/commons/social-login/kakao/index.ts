const CLIENT_ID = "fccd3a6382dd5e8ff544a9289e2296d4";
const REDIRECT_URI = "http://localhost:3000/src/commons/social/kakao";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
