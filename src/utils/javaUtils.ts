import shell from "shelljs";

import { doesFileExist } from "./fileUtils.ts";

export const checkJava = async () => {
  try {
    const versions = shell.exec("java -version", { silent: true });
    const version = versions.stderr.toString().split("\n")[0];

    console.log(`\t→ java version: ${version}\n`);
  } catch (error) {
    throw new Error(`java is not installed. Please install it (>= 8)`);
  }
};

export const checkJar = (jar: string) => {
  const exists = doesFileExist(jar);
  if (!exists) {
    throw new Error(`File ${jar} does not exist`);
  }
};
