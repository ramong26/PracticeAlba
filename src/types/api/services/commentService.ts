export namespace CommentTypes {
  // 공통 commentId 파라미터 타입
  interface WithCommentId {
    commentId: number;
  }
  // 공통 댓글 응답 타입
  interface WithCommentRes {
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
  export interface postIdCommentsParams {
    postId: number;
  }
  export interface postIdCommentsReq extends WithCommentId {}
  export interface postIdCommentsRes extends WithCommentRes {}

  // 댓글 목록 조회 params
  export interface getPostsIdCommentsParams {
    postId: number;
    page?: number;
    pageSize?: number;
  }

  // 댓글 수정 params / 요청 / 응답
  export interface patchCommentsIdParams extends WithCommentId {}
  export interface patchCommentsIdReq {
    content: string;
  }
  export interface patchCommentsIdRes extends WithCommentRes {}

  // 댓글 삭제
  export interface deleteCommentsIdParams extends WithCommentId {}
}
