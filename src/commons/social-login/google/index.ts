const CLIENT_ID =
  "572156246139-i69lcod8qaodq4g3qisme5tf0pd22dpe.apps.googleusercontent.com";
const REDIRECT_URI = "http://localhost:3000/src/commons/social/google";

export const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount
?client_id=${CLIENT_ID}
&redirect_uri=${REDIRECT_URI}
&response_type=code
&scope=https://www.googleapis.com/auth/userinfo.email`;

// 클라이언트 보안 비밀번호 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
