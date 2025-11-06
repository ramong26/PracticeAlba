import { AxiosResponse } from "axios";

import requestor from "@/lib/api/client/requestor";
import { UserTypes } from "@/types/swagerApiTypes/services/userService";

class UserService {
  // GET : 내 정보 조회
  getUsersMe() {
    return requestor.get(`/99-99/users/me`);
  }

  // PATCH : 내 정보 수정
  patchUsersMe(
    body: UserTypes.patchUsersMeReq
  ): Promise<AxiosResponse<UserTypes.patchUsersMeRes>> {
    return requestor.patch<UserTypes.patchUsersMeRes>(`/99-99/users/me`, body);
  }

  // PATCH : 비밀번호 변경
  patchUsersMePassword(
    body: UserTypes.patchUsersMePasswordReq
  ): Promise<AxiosResponse<UserTypes.patchUsersMePasswordRes>> {
    return requestor.patch<UserTypes.patchUsersMePasswordRes>(
      `/99-99/users/me/password`,
      body
    );
  }

  // GET : 내가 생성한 알바폼 목록 조회
  getUsersMeForms(params: UserTypes.getUsersMeFormsParams) {
    return requestor.get(`/99-99/users/me/forms`, { params });
  }

  // GET : 내가 지원한 알바폼 목록 조회
  getUsersMeApplications(params: UserTypes.getUsersMeApplicationsParams) {
    return requestor.get(`/99-99/users/me/applications`, { params });
  }

  // GET : 내가 스크랩한 알바폼 목록 조회
  getUsersMeScrap(params: UserTypes.getUsersMeScrapParams) {
    return requestor.get(`/99-99/users/me/scrap`, { params });
  }

  // GET : 내가 작성한 게시글 목록 조회
  getUsersMePosts(params: UserTypes.getUsersMePostsParams) {
    return requestor.get(`/99-99/users/me/posts`, { params });
  }

  // GET : 내가 작성한 댓글 목록 조회
  getUsersMeComments(params: UserTypes.getUsersMeCommentsParams) {
    return requestor.get(`/99-99/users/me/comments`, { params });
  }
}

const userService = new UserService();
export default userService;
