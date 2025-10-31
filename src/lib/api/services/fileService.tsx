import { AxiosResponse } from "axios";

import requestor from "@/lib/api/client/requestor";
import { FileTypes } from "@/types/api/services/fileService";

class FileService {
  // POST : 이미지 업로드
  postFilesImages(
    body: FileTypes.postImagesUploadReq
  ): Promise<AxiosResponse<FileTypes.postImagesUploadRes>> {
    if (!globalThis.FormData) {
      throw new Error("FormData is not supported in this environment.");
    }
    const formData = new FormData();
    formData.append("image", body.image);

    return requestor.post<FileTypes.postImagesUploadRes>(
      "/99-99/images/upload",
      formData
    );
  }

  // POST : 이력서 업로드
  postFilesResumes(
    body: FileTypes.postResumeUploadReq
  ): Promise<AxiosResponse<FileTypes.postResumeUploadRes>> {
    if (!globalThis.FormData) {
      throw new Error("FormData is not supported in this environment.");
    }
    const formData = new FormData();
    formData.append("file", body.file);
    return requestor.post<FileTypes.postResumeUploadRes>(
      "/99-99/resume/upload",
      formData
    );
  }

  // GET : 이력서 다운로드
  getFilesResumes(
    params: FileTypes.getResumeDownloadParams
  ): Promise<AxiosResponse<Blob>> {
    return requestor.get<Blob>(`/99-99/resume/download`, {
      params,
      responseType: "blob",
    });
  }
}

const fileService = new FileService();
export default fileService;
