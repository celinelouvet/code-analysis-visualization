import shell from "shelljs";

import { CLOC_IGNORE_FILE } from "./fileNames.ts";
import { doesFileExist, readFileContent } from "./fileUtils.ts";

export const checkCloc = () => {
  try {
    const version = shell.exec("cloc --version", { silent: true }).stdout;

    console.log(`\t→ cloc version: ${version}`);
  } catch (error) {
    throw new Error(
      `cloc is not installed. Please install it "https://github.com/AlDanial/cloc/releases/latest"`,
    );
  }
};

export const hasExistingClocignore = () => doesFileExist(CLOC_IGNORE_FILE);

export const getIgnoreDirs = () => {
  const content = readFileContent(CLOC_IGNORE_FILE);

  return content
    .split("\n")
    .filter((line) => line !== "")
    .join(",");
};
