import { AxiosResponse } from "axios";

import requestor from "@/lib/api/client/requestor";
import { FileTypes } from "@/types/api/services/fileService";

class FileService {
  // POST : 이미지 업로드
  postFilesImages(
    body: FileTypes.postImagesUploadReq
  ): Promise<AxiosResponse<FileTypes.postImagesUploadRes>> {
    const formData = new FormData();
    formData.append("image", body.image);

    return requestor.post<FileTypes.postImagesUploadRes>(
      "/99-99/images/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  }

  // POST : 이력서 업로드
  postFilesResumes(
    body: FileTypes.postResumeUploadReq
  ): Promise<AxiosResponse<FileTypes.postResumeUploadRes>> {
    const formData = new FormData();
    formData.append("file", body.file);
    return requestor.post<FileTypes.postResumeUploadRes>(
      "/99-99/resume/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  }

  // GET : 이력서 다운로드
  getFilesResumes(params: FileTypes.getResumeDownloadParams) {
    return requestor.get(`/99-99/resume/download`, { params });
  }
}

const fileService = new FileService();
export default fileService;
