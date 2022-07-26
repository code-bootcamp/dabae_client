const CLIENT_ID = "fccd3a6382dd5e8ff544a9289e2296d4";
const REDIRECT_URI = "http://localhost:3000/src/commons/social/oauth/kakao";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
// const [callGraphql] = useMutation(CREATE_USER);

// const href = window.location.href;
// let params = new URL(document.location).searchParams;
// let code = params.get("code");

// const onClickGraphqlApi = async () => {
//   try {
//     const result = await callGraphql(
//       `${process.env.REACT_APP_BACK_LOCALHOST_URL}/api/v1/oauth2/authorization/kakao?code=${code}`
//     );
//   } catch (error) {
//     console.log("error", error);
//   }
// };
