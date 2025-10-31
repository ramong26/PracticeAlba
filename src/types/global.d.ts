export {};

declare global {
  var FormData: typeof globalThis.FormData;
  var Blob: typeof globalThis.Blob;
  var File: typeof globalThis.File;
}
