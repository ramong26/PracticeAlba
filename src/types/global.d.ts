export {};

declare global {
  type _FormDataType = globalThis.FormData;
  type _BlobType = globalThis.Blob;
  type _FileType = globalThis.File;
}
