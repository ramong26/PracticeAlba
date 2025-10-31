export type FailedQueueItem = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resolve: (_token?: string | null) => void;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  reject: (_err?: any) => void;
};

// 이거 아닌데.. 이러면 타입스크립트 쓰는 이유가 없는데...
// 고쳐야 함...
