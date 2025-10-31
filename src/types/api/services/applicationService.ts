export namespace ApplicationTypes {
  // 공통 지원자 formId 파라미터 타입
  interface WithFormId {
    formId: number;
  }
  // 공통 지원자 applicationId 파라미터 타입
  interface WithApplicationId {
    applicationId: number;
  }
  // 공통 지원자 정보 파라미터 타입
  interface WithApplicantInfo {
    applicantId: number;
    updatedAt: string;
    createdAt: string;
    status: "REJECTED";
    introduction: string;
    resumeName: string;
    resumeId: number;
    experienceMonths: number;
    phoneNumber: string;
    name: string;
    id: number;
  }

  // 지원하기 parmas / 요청 / 응답
  export interface postFormsIdApplicationsParams extends WithFormId {}
  export interface postFormsIdApplicationsReq {
    password: string;
    introduction: string;
    resumeName: string;
    resumeId: number;
    experienceMonths: number;
    phoneNumber: string;
    name: string;
  }
  export interface postFormsIdApplicationsRes extends WithApplicantInfo {}

  // 지원 현황 목록 조회
  export interface getFormsIdApplicationsParams {
    formId: number;
    limit: number;
    cursor?: number;
    orderByExperience?: "asc" | "desc";
    orderByStatus?: "asc" | "desc";
  }

  // 지원 상세 조회
  export interface getApplicationsIdParams extends WithApplicationId {}

  // 지원 상태 수정 params / 요청 / 응답
  export interface patchApplicationsIdParams extends WithApplicationId {}
  export interface patchApplicationsIdReq {
    status: "REJECTED";
  }
  export interface patchApplicationsIdRes extends WithApplicantInfo {}

  // 비회원의 내 지원 내역 조회
  export interface postMyApplicationsVerifyParams extends WithFormId {}
  export interface postMyApplicationsVerifyReq {
    password: string;
    phoneNumber: string;
    name: string;
  }
  export interface postMyApplicationsVerifyRes extends WithApplicantInfo {}

  // 회원의 내 지원 내역 조회
  export interface getMyApplicationsParams extends WithFormId {}
}
