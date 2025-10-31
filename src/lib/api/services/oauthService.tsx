import { AxiosResponse } from "axios";

import requestor from "@/lib/api/client/requestor";
import { OAuthTypes } from "@/types/api/services/oauthService";

class OAuthService {
  // POST : 간편 로그인 등록, 수정
  postOauthApps(
    body: OAuthTypes.postOauthreq
  ): Promise<AxiosResponse<OAuthTypes.postOauthres>> {
    return requestor.post<OAuthTypes.postOauthres>("/99-99/oauth/apps", body);
  }

  // POST : 간편 회원가입
  postOauthSignup(
    params: OAuthTypes.getOauthSignupParams,
    body: OAuthTypes.postOauthSignupReq
  ): Promise<AxiosResponse<OAuthTypes.postOauthSignupRes>> {
    return requestor.post<OAuthTypes.postOauthSignupRes>(
      `/99-99/oauth/sign-up/${params.provider}`,
      body
    );
  }

  // POST : 간편 로그인
  postOauthSignin(
    params: OAuthTypes.getOauthSigninParams,
    body: OAuthTypes.postOauthSigninReq
  ): Promise<AxiosResponse<OAuthTypes.postOauthSigninRes>> {
    return requestor.post<OAuthTypes.postOauthSigninRes>(
      `/99-99/oauth/sign-in/${params.provider}`,
      body
    );
  }
}
const oauthService = new OAuthService();
export default oauthService;
