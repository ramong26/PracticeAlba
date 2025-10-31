import { AxiosResponse } from "axios";

import requestor from "@/lib/api/client/requestor";
import { ApplicationTypes } from "@/types/api/services/applicationService";

class ApplicationService {
  // POST : 지원하기
  postIdApplications(
    params: ApplicationTypes.postFormsIdApplicationsParams,
    data: ApplicationTypes.postFormsIdApplicationsReq
  ): Promise<AxiosResponse<ApplicationTypes.postFormsIdApplicationsRes>> {
    return requestor.post(`/99-99/forms/${params.formId}/applications`, data);
  }

  // GET : 지원 현황 목록 조회
  getIdApplications(
    params: ApplicationTypes.getFormsIdApplicationsParams
  ): Promise<AxiosResponse<ApplicationTypes.getFormsIdApplicationsRes>> {
    return requestor.get(`/99-99/forms/${params.formId}/applications`, {
      params,
    });
  }

  // GET : 지원 상세 조회
  getApplicationsId(params: ApplicationTypes.getApplicationsIdParams) {
    return requestor.get(`/99-99/applications/${params.applicationId}`);
  }

  // PATCH : 지원 상태 변경
  patchApplicationsId(
    params: ApplicationTypes.patchApplicationsIdParams,
    body: ApplicationTypes.patchApplicationsIdReq
  ): Promise<AxiosResponse<ApplicationTypes.patchApplicationsIdRes>> {
    return requestor.patch<ApplicationTypes.patchApplicationsIdRes>(
      `/99-99/applications/${params.applicationId}`,
      body
    );
  }

  // POST : 비회원 내 지원 내역 조회
  postMyApplicationsVerify(
    params: ApplicationTypes.postMyApplicationsVerifyParams,
    body: ApplicationTypes.postMyApplicationsVerifyReq
  ): Promise<AxiosResponse<ApplicationTypes.postMyApplicationsVerifyRes>> {
    return requestor.post<ApplicationTypes.postMyApplicationsVerifyRes>(
      `/99-99/forms/${params.formId}/my-application/verify`,
      body
    );
  }

  // GET : 비회원 내 지원 내역 조회
  getMyApplications(params: ApplicationTypes.getMyApplicationsParams) {
    return requestor.get(`/99-99/forms/${params.formId}/my-application`, {
      params,
    });
  }
}

const applicationService = new ApplicationService();
export default applicationService;
