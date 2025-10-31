import { AxiosResponse } from "axios";

import requestor from "@/lib/api/client/requestor";
import { CommentTypes } from "@/types/swagerApiTypes/services/commentService";

class CommentService {
  // POST : 댓글 작성
  postComments(
    params: CommentTypes.postIdCommentsParams,
    body: CommentTypes.postIdCommentsReq
  ): Promise<AxiosResponse<CommentTypes.postIdCommentsRes>> {
    return requestor.post<CommentTypes.postIdCommentsRes>(
      `/99-99/posts/${params.postId}/comments`,
      body
    );
  }

  // GET : 댓글 목록 조회
  getComments(params: CommentTypes.getPostsIdCommentsParams) {
    return requestor.get(`/99-99/posts/${params.postId}/comments`, {
      params,
    });
  }

  // PATCH : 댓글 수정
  patchCommentsId(
    params: CommentTypes.patchCommentsIdParams,
    body: CommentTypes.patchCommentsIdReq
  ): Promise<AxiosResponse<CommentTypes.patchCommentsIdRes>> {
    return requestor.patch<CommentTypes.patchCommentsIdRes>(
      `/99-99/comments/${params.commentId}`,
      body
    );
  }

  // DELETE : 댓글 삭제
  deleteCommentsId(params: CommentTypes.deleteCommentsIdParams) {
    return requestor.delete(`/99-99/comments/${params.commentId}`);
  }
}

const commentService = new CommentService();
export default commentService;
