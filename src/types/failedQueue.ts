export type FailedQueueItem = {
  resolve: (token?: string | null) => void;
  reject: (err?: any) => void;
};
