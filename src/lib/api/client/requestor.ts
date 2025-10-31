import axios, { AxiosRequestConfig } from "axios";

declare module "axios" {
  export interface AxiosRequestConfig {
    _retry?: boolean;
  }
}

// Axios 인스턴스 생성
const requestor = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true,
});

// 토큰 갱신 상태 관리
let isRefreshing = false;
type FailedQueueItem = {
  resolve: (_token?: string | null) => void;
  reject: (_err?: any) => void;
};

let failedQueue: FailedQueueItem[] = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

// 응답 인터셉터
requestor.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config as AxiosRequestConfig;

    // 401 && 토큰 재시도 하지 않은 경우
    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        // 이미 토큰 갱신 중이면 큐에 넣고 대기
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((_token) => {
            if (originalRequest.headers) {
              originalRequest.headers.Authorization = `Bearer ${_token}`;
            }
            return requestor(originalRequest);
          })
          .catch((_err) => Promise.reject(_err));
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const { data } = await requestor.post("/99-99/auth/refresh", null, {
          withCredentials: true,
        });

        const newToken = data?.accessToken;
        if (!newToken) throw new Error("No access token returned");

        // Axios default 헤더 갱신
        requestor.defaults.headers.Authorization = `Bearer ${newToken}`;

        processQueue(null, newToken);
        isRefreshing = false;

        // 원본 요청 헤더 갱신 후 재시도
        if (originalRequest.headers) {
          originalRequest.headers.Authorization = `Bearer ${newToken}`;
        }
        return requestor(originalRequest);
      } catch (err) {
        processQueue(err, null);
        isRefreshing = false;
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

export default requestor;
