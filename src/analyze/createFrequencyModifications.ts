import shell from "shelljs";

import { checkJar, checkJava, MAAT_FREQS, MAAT_JAR } from "../utils/index.ts";

export const createFrequencyModifications = (
  maatLog: string,
  reportFolder: string,
) => {
  try {
    console.log(`Creating frequency of modifications into "${MAAT_FREQS}"`);

    checkJava();
    checkJar(MAAT_JAR);

    shell.exec(
      `java -jar ${MAAT_JAR} -c git -l ${maatLog} -a revisions > ${MAAT_FREQS}`,
      { cwd: reportFolder },
    );
    console.log("\t→ Frequency of modifications created\n");

    return MAAT_FREQS;
  } catch (error) {
    console.error(`Couldn't create frequency of modifications`, error);
    throw new Error(`Couldn't create frequency of modifications: ${error}`);
  }
};
