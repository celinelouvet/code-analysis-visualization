import { $ } from "bun";

import { checkJar, checkJava, MAAT_JAR, MAAT_SUMMARY } from "./utils";

export const createSummary = async (maatLog: string, reportFolder: string) => {
  try {
    console.log(`Creating summary into "${MAAT_SUMMARY}"`);

    await checkJava();
    await checkJar(MAAT_JAR);

    await $`java -jar ${MAAT_JAR} -c git -l "${maatLog}" -a summary > "${MAAT_SUMMARY}"`.cwd(
      reportFolder
    );

    console.log("\t→ Summary created\n");
  } catch (error) {
    console.error(`Couldn't create summary`, error);
    throw new Error(`Couldn't create summary: ${error}`);
  }
};
