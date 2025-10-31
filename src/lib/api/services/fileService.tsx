import { AxiosResponse } from "axios";
import requestor from "@/lib/api/client/requestor";
import { FileTypes } from "@/types/swagerApi/services/fileService";

class FileService {
  // FormData 생성 헬퍼
  private createFormData(fields: Record<string, File>) {
    if (!globalThis.FormData) {
      throw new Error("FormData is not supported in this environment.");
    }

    const formData = new globalThis.FormData();
    Object.entries(fields).forEach(([key, file]) => {
      formData.append(key, file);
    });
    return formData;
  }

  // POST : 이미지 업로드
  postFilesImages(
    body: FileTypes.postImagesUploadReq
  ): Promise<AxiosResponse<FileTypes.postImagesUploadRes>> {
    const formData = this.createFormData({ image: body.image });
    return requestor.post<FileTypes.postImagesUploadRes>(
      "/99-99/images/upload",
      formData
    );
  }

  // POST : 이력서 업로드
  postFilesResumes(
    body: FileTypes.postResumeUploadReq
  ): Promise<AxiosResponse<FileTypes.postResumeUploadRes>> {
    const formData = this.createFormData({ file: body.file });
    return requestor.post<FileTypes.postResumeUploadRes>(
      "/99-99/resume/upload",
      formData
    );
  }

  // GET : 이력서 다운로드
  getFilesResumes(
    params: FileTypes.getResumeDownloadParams
  ): Promise<AxiosResponse<Blob>> {
    return requestor.get<Blob>("/99-99/resume/download", {
      params,
      responseType: "blob",
    });
  }
}

const fileService = new FileService();
export default fileService;
