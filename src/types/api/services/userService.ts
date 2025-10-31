export namespace UserTypes {
  // 내 정보 수정 요청
  export interface patchUsersMeReq {
    location: string;
    phoneNumber: string;
    storePhoneNumber: string;
    storeName: string;
    imageUrl: string;
    nickname: string;
    name: string;
  }

  // 내 정보 수정 응답
  export interface patchUsersMeRes extends patchUsersMeReq {
    email: string;
    id: number;
  }

  // 비밀번호 변경 요청
  export interface patchUsersMePasswordReq {
    newPassword: string;
    currentPassword: string;
  }

  // 비밀번호 변경 응답
  export interface patchUsersMePasswordRes {
    message: string;
  }

  // 공통 파라미터 타입
  export interface PaginationParams {
    limit: number;
    cursor?: number;
  }

  // 내가 생성한 알바폼 목록 조회
  export interface getUsersMeFormsParams extends PaginationParams {
    orderBy?: "mostRecent" | "highestWage" | "mostApplied" | "mostScrapped";
    isPublic?: boolean;
    isRecruiting?: boolean;
    keyword?: string;
  }

  // 내가 지원한 알바폼 목록 조회
  export interface getUsersMeApplicationsParams extends PaginationParams {
    status?: "REJECTED" | "INTERVIEW_PENDING" | "INTERVIEW_COMPLETED" | "HIRED";
    keyword?: string;
  }

  // 내가 스크랩한 알바폼 목록 조회
  export interface getUsersMeScrapParams extends PaginationParams {
    orderBy?: "mostRecent" | "highestWage" | "mostApplied" | "mostScrapped";
    isPublic?: boolean;
    isRecruiting?: boolean;
  }

  // 내가 작성한 게시글 목록 조회
  export interface getUsersMePostsParams extends PaginationParams {
    orderBy?: "mostRecent" | "mostCommented" | "mostLiked";
  }

  // 내가 작성한 댓글 목록 조회
  export interface getUsersMeCommentsParams {
    page: number;
    pageSize: number;
  }
}
