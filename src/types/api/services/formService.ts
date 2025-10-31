export namespace FormTypes {
  // 공통 formid 파라미터 타입
  interface WithFormId {
    formId: number;
  }
  // 공통 알바폼 수정 요청
  export interface withFormsIdReq {
    preferred: string;
    age: string;
    education: string;
    gender: string;
    numberOfPositions: number;
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
  }
  // 공통 forms 응답 타입
  interface WithFormsRes extends withFormsIdReq {
    updatedAt: string;
    createdAt: string;
    ownerId: number;
    id: number;
  }
  // 공통 스크랩 응답 타입
  interface WithScrapRes extends WithFormsRes {
    scrapCount: number;
    applyCount: number;
    isScrapped: boolean;
    phoneNumber: string;
    storePhoneNumber: string;
    storeName: string;
  }

  // 알바폼 생성 요청 / 응답
  export interface postFormsReq {
    isPublic: boolean;
    hourlyWage: number;
    isNegotiableWorkDays: boolean;
    workDays: string[];
    workEndTime: string;
    workStartTime: string;
    workEndDate: string;
    workStartDate: string;
    location: string;
    preferred: string;
    age: string;
    education: string;
    gender: string;
    numberOfPositions: number;
    imageUrls: string[];
    recruitmentEndDate: string;
    recruitmentStartDate: string;
    description: string;
    title: string;
  }
  export interface postFormsRes extends WithFormsRes {}

  // 알바폼 목록 조회
  export interface getFormsParams {
    orderBy?: "mostRecent" | "highestWage" | "mostApplied" | "mostScrapped";
    limit: number;
    cursor?: number;
    keyword?: string;
    isRecruiting?: boolean;
  }

  // 알바폼 수정 요청 / 응답
  export interface patchFormsIdParams extends WithFormId {}
  export interface patchFormsIdReq extends withFormsIdReq {}
  export interface patchFormsIdRes extends WithFormsRes {}

  // 알바폼 삭제 타입 없음
  export interface deleteFormsIdParams extends WithFormId {}

  // 알바폼 상세 조회
  export interface getFormsIdParams extends WithFormId {}

  // 알바폼 스크랩 parameters / 응답
  export interface postFormsIdScrapParams extends WithFormId {}
  export interface postFormsIdScrapRes extends WithScrapRes {}

  // 알바폼 스크랩 취소 parameters / 응답
  export interface deleteFormsIdScrapParams extends WithFormId {}
  export interface deleteFormsIdScrapRes extends WithScrapRes {}
}
