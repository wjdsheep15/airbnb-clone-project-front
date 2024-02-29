import { getToken } from "@/components/kakaoLogin/getToken";
import { useEffect } from "react";

const KAKAO_API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const client_id = KAKAO_API_KEY || "";
const redirect_uri = "http://localhost:3000/kakaoLogin";
const response_type = "code";

const KakaoLogin = () => {
  useEffect(() => {
    const search = new URLSearchParams(window.location.search); //인가 코드 요청시 redirect로 받는 값 http://localhost:3000/login?code=ZdlTAr6tyohWbOQeuIbHE5eiIl2nVGdUb6pliUsgJuc52b6gYS3724NdXmYKPXNOAAABje_bzurC3p98Pd5TpQ
    const code = search.get("code"); // code부분인 인가 코드 추츨 ZdlTAr6tyohWbOQeuIbHE5eiIl2nVGdUb6pliUsgJuc52b6gYS3724NdXmYKPXNOAAABje_bzurC3p98Pd5TpQ

    //카카오로부터 redirect 당한 경우 code가 들어있을 것이다!
    if (code) {
      //post로 aouth/token 토큰 요청하는 부분
      handleGetToken();
    }
  }, []); //최초 진입시 발동 (1.실제 최초인 경우 2. 카카오로부터 redirect 당해서 진입한 경우)

  const handleGetToken = async () => {
    const {
      token_type,
      access_token,
      expires_token,
      refresh_token,
      refresh_token_expires_in,
    } = await getToken();

    localStorage.setItem("access_token", access_token);
  };

  //authParam은 카카오에 인가코드 요청할 떄 필요한 파라미터 값임
  const authParam = new URLSearchParams({
    client_id,
    redirect_uri,
    response_type,
  });

  return (
    <a href={`https://kauth.kakao.com/oauth/authorize?${authParam.toString()}`}>
      로그인
    </a>
  );
};
export default KakaoLogin;
