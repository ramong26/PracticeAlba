import { AxiosResponse } from "axios";

import requestor from "@/lib/api/client/requestor";
import { AuthTypes } from "@/types/swagerApiTypes/services/authService";

class AuthService {
  // POST : 회원가입
  postAuthSignup(
    body: AuthTypes.postAuthSignupReq
  ): Promise<AxiosResponse<AuthTypes.postAuthSignupRes>> {
    return requestor.post<AuthTypes.postAuthSignupRes>(
      "/99-99/auth/sign-up",
      body
    );
  }

  // POST : 로그인
  postAuthSignin(
    body: AuthTypes.postAuthSigninReq
  ): Promise<AxiosResponse<AuthTypes.postAuthSigninRes>> {
    return requestor.post<AuthTypes.postAuthSigninRes>(
      "/99-99/auth/sign-in",
      body
    );
  }

  // POST : 토큰 갱신
  postAuthRefresh(
    body: AuthTypes.postAuthRefreshReq
  ): Promise<AxiosResponse<AuthTypes.postAuthRefreshRes>> {
    return requestor.post<AuthTypes.postAuthRefreshRes>(
      "/99-99/auth/refresh",
      body
    );
  }
}

const authService = new AuthService();
export default authService;
