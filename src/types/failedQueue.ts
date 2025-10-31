export type FailedQueueItem = {
  resolve: (_token?: string | null) => void;
  reject: (_err?: any) => void;
};
