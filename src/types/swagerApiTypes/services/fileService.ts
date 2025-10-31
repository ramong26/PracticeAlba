export namespace FileTypes {
  // 이미지 업로드 요청 / 응답
  export interface postImagesUploadReq {
    image: File;
  }
  export interface postImagesUploadRes {
    url: string;
  }

  // 이력서 업로드 요청 / 응답
  export interface postResumeUploadReq {
    file: File;
  }
  export interface postResumeUploadRes {
    resumeName: string;
    resumeId: number;
  }

  // 이력서 다운로드
  export interface getResumeDownloadParams {
    resumeId: number;
  }
}
