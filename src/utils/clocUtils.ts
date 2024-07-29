import { $, file } from "bun";

import { CLOC_IGNORE_FILE } from "./fileNames";
import { doesFileExist, readFileContent } from "./fileUtils";

export const checkCloc = async () => {
  try {
    const version = await $`cloc --version`.text();
    console.log(`\t→ cloc version: ${version}`);
  } catch (error) {
    throw new Error(
      `cloc is not installed. Please install it "https://github.com/AlDanial/cloc/releases/latest"`
    );
  }
};

export const hasExistingClocignore = async () =>
  doesFileExist(CLOC_IGNORE_FILE);

export const getIgnoreDirs = async () => {
  const content = await readFileContent(CLOC_IGNORE_FILE);

  return content
    .split("\n")
    .filter((line) => line !== "")
    .join(",");
};
