export {};

declare global {
  type FormDataType = globalThis.FormData;
  type BlobType = globalThis.Blob;
  type FileType = globalThis.File;
}
