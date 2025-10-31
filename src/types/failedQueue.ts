/* eslint-disable @typescript-eslint/no-unused-vars */
export type FailedQueueItem = {
  resolve: (_token?: string | null) => void;
  reject: (_err?: any) => void;
};
