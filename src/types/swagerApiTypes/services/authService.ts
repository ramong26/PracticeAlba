export namespace AuthTypes {
  // 공통 auth 응답 타입
  interface withAuthRes {
    refreshToken: string;
    accessToken: string;
    user: {
      location: string;
      phoneNumber: string;
      storePhoneNumber: string;
      storeName: string;
      role: "OWNER" | "APPLICANT";
      imageUrl: string;
      nickname: string;
      name: string;
      email: string;
      id: number;
    };
  }
  // 회원가입  요청 / 응답
  export interface postAuthSignupReq {
    email: string;
    password: string;
    name: string;
    nickname: string;
    role: "OWNER" | "APPLICANT";
    storeName: string | undefined;
    storePhoneNumber: string | undefined;
    phoneNumber: string | undefined;
    location: string | undefined;
  }
  export type postAuthSignupRes = withAuthRes;

  // 로그인 요청 / 응답
  export interface postAuthSigninReq {
    password: string;
    email: string;
  }
  export type postAuthSigninRes = withAuthRes;

  // 토큰 갱신 요청 / 응답
  export interface postAuthRefreshReq {
    refreshToken: string;
  }
  export interface postAuthRefreshRes {
    accessToken: string;
  }
}
