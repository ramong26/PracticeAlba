export namespace CommentTypes {
  // 공통 commentId 파라미터 타입
  interface withCommentId {
    commentId: number;
  }
  // 공통 postId 파라미터 타입
  interface withPostId {
    postId: number;
  }
  // 공통 댓글 요청 타입
  interface withCommentReq {
    content: string;
  }
  // 공통 댓글 응답 타입
  interface withCommentRes {
    writer: {
      imageUrl: string;
      nickname: string;
      id: number;
    };
    updatedAt: string;
    createdAt: string;
    content: string;
    id: number;
  }

  // 댓글 작성 parmas / 요청 / 응답
  export type postIdCommentsParams = withPostId;
  export type postIdCommentsReq = withCommentReq;
  export type postIdCommentsRes = withCommentRes;

  // 댓글 목록 조회 params
  export interface getPostsIdCommentsParams extends withPostId {
    page?: number;
    pageSize?: number;
  }

  // 댓글 수정 params / 요청 / 응답
  export type patchCommentsIdParams = withCommentId;
  export type patchCommentsIdReq = withCommentReq;
  export type patchCommentsIdRes = withCommentRes;

  // 댓글 삭제
  export type deleteCommentsIdParams = withCommentId;
}
