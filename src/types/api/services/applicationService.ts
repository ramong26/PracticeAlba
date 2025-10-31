export namespace ApplicationTypes {
  // 공통 지원자 formId 파라미터 타입
  interface withFormId {
    formId: number;
  }
  // 공통 지원자 applicationId 파라미터 타입
  interface withApplicationId {
    applicationId: number;
  }
  // 공통 지원자 정보 파라미터 타입
  interface withApplicantInfo {
    applicantId: number;
    updatedAt: string;
    createdAt: string;
    status: "REJECTED" | "INTERVIEW_PENDING" | "INTERVIEW_COMPLETED" | "HIRED";
    introduction: string;
    resumeName: string;
    resumeId: number;
    experienceMonths: number;
    phoneNumber: string;
    name: string;
    id: number;
  }

  // 지원하기 parmas / 요청 / 응답
  export interface postFormsIdApplicationsParams extends withFormId {}
  export interface postFormsIdApplicationsReq {
    password: string;
    introduction: string;
    resumeName: string;
    resumeId: number;
    experienceMonths: number;
    phoneNumber: string;
    name: string;
  }
  export type postFormsIdApplicationsRes = withApplicantInfo;

  // 지원 현황 목록 조회 params / 응답
  export interface getFormsIdApplicationsParams {
    formId: number;
    limit: number;
    cursor?: number;
    orderByExperience?: "asc" | "desc";
    orderByStatus?: "asc" | "desc";
  }
  export interface getFormsIdApplicationsRes {
    nextCursor: number | null;
    data: [
      {
        applicantId: number | null;
        updatedAt: string;
        createdAt: string;
        status:
          | "REJECTED"
          | "INTERVIEW_PENDING"
          | "INTERVIEW_COMPLETED"
          | "HIRED";
        introduction: string;
        resumeName: string;
        resumeId: number | null;
        experienceMonths: number | null;
        phoneNumber: string;
        name: string;
        id: number | null;
      }
    ];
  }

  // 지원 상세 조회
  export type getApplicationsIdParams = withApplicationId;

  // 지원 상태 수정 params / 요청 / 응답
  export type patchApplicationsIdParams = withApplicationId;
  export interface patchApplicationsIdReq {
    status: "REJECTED" | "INTERVIEW_PENDING" | "INTERVIEW_COMPLETED" | "HIRED";
  }
  export type patchApplicationsIdRes = withApplicantInfo;

  // 비회원의 내 지원 내역 조회
  export interface postMyApplicationsVerifyParams extends withFormId {}
  export interface postMyApplicationsVerifyReq {
    password: string;
    phoneNumber: string;
    name: string;
  }
  export type postMyApplicationsVerifyRes = withApplicantInfo;

  // 회원의 내 지원 내역 조회
  export type getMyApplicationsParams = withFormId;
}
