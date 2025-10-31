export namespace PostTypes {
  // 공통 파라미터 타입
  interface withPostId {
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
  export type getPostsIdParams = withPostId;

  // 게시글 수정 요청 / 응답
  export type patchPostsIdReq = postPostsReq;
  export type patchPostsIdRes = postPostsRes;

  // 게시글 삭제
  export type deletePostsIdParams = withPostId;

  // 게시글 좋아요 / 응답
  export type postPostsIdLikeParams = withPostId;
  export type postPostsIdLikeRes = postPostsRes;

  // 게시글 좋아요 취소 / 응답
  export type deletePostsIdLikeParams = withPostId;
  export type deletePostsIdLikeRes = postPostsIdLikeRes;
}
