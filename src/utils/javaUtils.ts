import { $ } from "bun";

import { doesFileExist } from "./fileUtils";

export const checkJava = async () => {
  try {
    const versions = await $`java -version`.quiet();
    const version = versions.stderr.toString().split("\n")[0];

    console.log(`\t→ java version: ${version}\n`);
  } catch (error) {
    throw new Error(`java is not installed. Please install it (>= 8)`);
  }
};

export const checkJar = async (jar: string) => {
  try {
    await doesFileExist(jar);
  } catch (error) {
    throw new Error(`Unable to check ${jar}: ${error}`);
  }
};
