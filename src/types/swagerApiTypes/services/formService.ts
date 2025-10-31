export namespace FormTypes {
  // 공통 formid 파라미터 타입
  interface withFormId {
    formId: number;
  }
  // 공통 알바폼 수정 요청
  export interface withFormsIdReq {
    isPublic: boolean;
    hourlyWage: number;
    isNegotiableWorkDays: boolean;
    workDays: string[];
    workEndTime: string;
    workStartTime: string;
    workEndDate: string;
    workStartDate: string;
    location: string;
    imageUrls: string[];
    recruitmentEndDate: string;
    recruitmentStartDate: string;
    description: string;
    title: string;
    preferred: string;
    age: string;
    education: string;
    gender: string;
    numberOfPositions: number;
  }
  // 공통 forms 응답 타입
  interface withFormsRes extends withFormsIdReq {
    updatedAt: string;
    createdAt: string;
    ownerId: number;
    id: number;
  }
  // 공통 스크랩 응답 타입
  interface withScrapRes extends withFormsRes {
    scrapCount: number;
    applyCount: number;
    isScrapped: boolean;
    phoneNumber: string;
    storePhoneNumber: string;
    storeName: string;
  }

  // 알바폼 생성 요청 / 응답
  export type postFormsReq = withFormsIdReq;
  export type postFormsRes = withFormsRes;

  // 알바폼 목록 조회
  export interface getFormsParams {
    orderBy?: "mostRecent" | "highestWage" | "mostApplied" | "mostScrapped";
    limit: number;
    cursor?: number;
    keyword?: string;
    isRecruiting?: boolean;
  }

  // 알바폼 수정 요청 / 응답
  export type patchFormsIdParams = withFormId;
  export type patchFormsIdReq = withFormsIdReq;
  export type patchFormsIdRes = withFormsRes;

  // 알바폼 삭제 타입 없음
  export type deleteFormsIdParams = withFormId;

  // 알바폼 상세 조회
  export type getFormsIdParams = withFormId;

  // 알바폼 스크랩 parameters / 응답
  export type postFormsIdScrapParams = withFormId;
  export type postFormsIdScrapRes = withScrapRes;

  // 알바폼 스크랩 취소 parameters / 응답
  export type deleteFormsIdScrapParams = withFormId;
  export type deleteFormsIdScrapRes = withScrapRes;
}
