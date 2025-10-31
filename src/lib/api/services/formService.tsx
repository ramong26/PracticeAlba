import { AxiosResponse } from "axios";

import requestor from "@/lib/api/client/requestor";
import { FormTypes } from "@/types/swagerApi/services/formService";

class FormService {
  // POST : 알바폼 생성
  postForms(
    body: FormTypes.postFormsReq
  ): Promise<AxiosResponse<FormTypes.postFormsRes>> {
    return requestor.post<FormTypes.postFormsRes>("/99-99/forms", body);
  }

  // GET : 알바폼 목록 조회
  getForms(params: FormTypes.getFormsParams) {
    return requestor.get(`/99-99/forms/`, { params });
  }

  // PATCH : 알바폼 수정
  patchFormsId(
    params: FormTypes.patchFormsIdParams,
    body: FormTypes.patchFormsIdReq
  ): Promise<AxiosResponse<FormTypes.patchFormsIdRes>> {
    return requestor.patch<FormTypes.patchFormsIdRes>(
      `/99-99/forms/${params.formId}`,
      body
    );
  }

  // DELETE : 알바폼 삭제
  deleteFormsId(params: FormTypes.deleteFormsIdParams) {
    return requestor.delete(`/99-99/forms/${params.formId}`);
  }

  // GET : 알바폼 상세 조회
  getFormsId(params: FormTypes.getFormsIdParams) {
    return requestor.get(`/99-99/forms/${params.formId}`);
  }

  // POST : 알바폼 스크랩
  postFormsIdScrap(
    params: FormTypes.postFormsIdScrapParams
  ): Promise<AxiosResponse<FormTypes.postFormsIdScrapRes>> {
    return requestor.post<FormTypes.postFormsIdScrapRes>(
      `/99-99/forms/${params.formId}/scrap`
    );
  }

  // DELETE : 알바폼 스크랩 취소
  deleteFormsIdScrap(
    params: FormTypes.deleteFormsIdScrapParams
  ): Promise<AxiosResponse<FormTypes.deleteFormsIdScrapRes>> {
    return requestor.delete<FormTypes.deleteFormsIdScrapRes>(
      `/99-99/forms/${params.formId}/scrap`
    );
  }
}
const formService = new FormService();
export default formService;
