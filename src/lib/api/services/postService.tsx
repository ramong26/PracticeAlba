import { AxiosResponse } from "axios";

import requestor from "@/lib/api/client/requestor";
import { PostTypes } from "@/types/swagerApi/services/postService";

class PostService {
  // POST : 게시글 등록
  postPosts(
    body: PostTypes.postPostsReq
  ): Promise<AxiosResponse<PostTypes.postPostsRes>> {
    return requestor.post("/99-99/posts", body);
  }

  // GET : 게시글 목록 조회
  getPosts(params: PostTypes.getPostsParams) {
    return requestor.get("/99-99/posts", {
      params,
    });
  }

  // GET : 게시글 상세 조회
  getPostsId(params: PostTypes.getPostsIdParams) {
    return requestor.get(`/99-99/posts/${params.postId}`);
  }

  // PATCH : 게시글 수정
  patchPostsId(
    params: PostTypes.getPostsIdParams,
    body: PostTypes.patchPostsIdReq
  ): Promise<AxiosResponse<PostTypes.patchPostsIdRes>> {
    return requestor.patch<PostTypes.patchPostsIdRes>(
      `/99-99/posts/${params.postId}`,
      body
    );
  }

  // DELETE : 게시글 삭제
  deletePostsId(params: PostTypes.deletePostsIdParams) {
    return requestor.delete(`/99-99/posts/${params.postId}`);
  }

  // POST : 게시글 좋아요
  postPostsIdLike(
    params: PostTypes.postPostsIdLikeParams
  ): Promise<AxiosResponse<PostTypes.postPostsIdLikeRes>> {
    return requestor.post<PostTypes.postPostsIdLikeRes>(
      `/99-99/posts/${params.postId}/like`
    );
  }

  // DELETE : 게시글 좋아요 취소
  deletePostsIdLike(
    params: PostTypes.deletePostsIdLikeParams
  ): Promise<AxiosResponse<PostTypes.deletePostsIdLikeRes>> {
    return requestor.delete<PostTypes.deletePostsIdLikeRes>(
      `/99-99/posts/${params.postId}/like`
    );
  }
}

const postService = new PostService();
export default postService;
