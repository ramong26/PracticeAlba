import axios from "axios";

declare module "axios" {
  export interface AxiosRequestConfig {
    _retry?: boolean;
  }
}

const requestor = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true,
});

// 응답 인터셉터 설정
requestor.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // 재시도 방지 플러그인
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const { data } = await requestor.post("/99-99/auth/refresh", {
          withCredentials: true,
        });

        if (data?.accessToken) {
          requestor.defaults.headers.Authorization = `Bearer ${data.accessToken}`;
        }
        return requestor(originalRequest);
      } catch (err) {
        console.error("Token refresh failed:", err);
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

export default requestor;
