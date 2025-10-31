export namespace PostTypes {
  // 공통 파라미터 타입
  interface WithPostId {
    postId: number;
  }
  // 게시글 등록 요청
  export interface postPostsReq {
    imageUrl: string;
    content: string;
    title: string;
  }
  // 게시글 등록 응답
  export interface postPostsRes {
    writer: {
      imageUrl: string;
      nickname: string;
      id: number;
    };
    updatedAt: string;
    createdAt: string;
    commentCount: number;
    likeCount: number;
    imageUrl: string;
    content: string;
    title: string;
    id: number;
    isLiked: boolean;
  }

  // 게시글 목록 조회
  export interface getPostsParams {
    limit: number;
    cursor?: number;
    orderBy?: "mostRecent" | "mostCommented" | "mostLiked";
    keyword?: string;
  }

  // 게시글 상세 조회
  export interface getPostsIdParams extends WithPostId {}

  // 게시글 수정 요청 / 응답
  export interface patchPostsIdReq extends postPostsReq {}
  export interface patchPostsIdRes extends postPostsRes {}

  // 게시글 삭제
  export interface deletePostsIdParams extends WithPostId {}

  // 게시글 좋아요 / 응답
  export interface postPostsIdLikeParams extends WithPostId {}
  export interface postPostsIdLikeRes extends postPostsRes {}

  // 게시글 좋아요 취소 / 응답
  export interface deletePostsIdLikeParams extends WithPostId {}
  export interface deletePostsIdLikeRes extends postPostsIdLikeRes {}
}
