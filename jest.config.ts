import type { Config } from "jest";

const config: Config = {
  testEnvironment: "node",
  testMatch: [
    "**/__tests__/**/*.?(m)[jt]s?(x)",
    "**/?(*.)+(spec|test).?(m)[jt]s?(x)",
  ],
  testPathIgnorePatterns: ["/node_modules/"],
};

export default config;
