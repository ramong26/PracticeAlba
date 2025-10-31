export namespace OAuthTypes {
  // 공통 간편 로그인/회원가입 요청
  interface WithOAuthRes {
    user: {
      location: string;
      phoneNumber: string;
      storePhoneNumber: string;
      storeName: string;
      role: string;
      imageUrl: string;
      nickname: string;
      name: string;
      email: string;
      id: number;
    };
    refreshToken: string;
    accessToken: string;
  }
  // 공통 provider 파라미터 타입
  export interface WithProviderParams {
    provider: "google" | "kakao";
  }

  // 간편 로그인 등록, 수정 요청 / 응답
  export interface postOauthreq {
    appKey: string;
    provider: string;
  }
  export interface postOauthres {
    createdAt: string;
    updatedAt: string;
    appKey: string;
    provider: string;
    teamId: string;
    id: number;
  }

  // 간편 회원가입  params / 요청 / 응답
  export interface getOauthSignupParams extends WithProviderParams {}
  export interface postOauthSignupReq {
    location: string;
    phoneNumber: string;
    storePhoneNumber: string;
    storeName: string;
    role: string;
    nickname: string;
    name: string;
    redirectUri: string;
    token: string;
  }
  export interface postOauthSignupRes extends WithOAuthRes {}

  // 간편 로그인 params / 요청 / 응답
  export interface getOauthSigninParams extends WithProviderParams {}
  export interface postOauthSigninReq {
    redirectUri: string;
    token: string;
  }
  export interface postOauthSigninRes extends WithOAuthRes {}
}
