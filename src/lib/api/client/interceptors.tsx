import requestor from "./requestor";

// 응답 인터셉터 설정
requestor.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // 재시도 방지 플러그인
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        await requestor.post("api/auth/refresh");
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
